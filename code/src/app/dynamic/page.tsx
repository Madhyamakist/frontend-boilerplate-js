'use client';

import { useState } from 'react';
import DepartmentDropdown from '../components/departmentDropdown'
import ObjectCard, { ArtObject } from '../components/objectCard';

export default function HomePage() {
    const [objects, setObjects] = useState<ArtObject[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchObjects = async (departmentId: number) => {
        setLoading(true);
        setObjects([]);

        try {
            const res = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
            );

            if (!res.ok) throw new Error(`Failed to fetch object list. Status: ${res.status}`);

            const data = await res.json();
            const top10 = data.objectIDs?.slice(0, 10) || [];
            console.log(top10)
            if (top10.length === 0) {
                console.warn("No objects found for department:", departmentId);
                setObjects([]);
                return;
            }

            const details = await Promise.all(
                top10.map(async (id: number) => {
                    try {
                        const objRes = await fetch(
                            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
                        );
                        if (!objRes.ok) throw new Error(`Object ${id} fetch failed`);
                        return await objRes.json();
                    } catch (error) {
                        console.warn(`Failed to fetch object ${id}`, error);
                        return null;
                    }
                })
            );

            // Filter out failed fetches
            setObjects(details.filter(Boolean));
        } catch (error) {
            console.error("Error in fetchObjects:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="p-4 justify-center">
            <h1>Dynamic Page</h1>
            <h2 className="deptTxt">Select Department Type</h2>
            <DepartmentDropdown onSelect={fetchObjects} />
            {loading ? (
                <p className="mt-6">Loading...</p>
            ) : (
                <div className="objCard">
                    {objects.map((obj) => (
                        <ObjectCard key={obj.objectID} object={obj} />
                    ))}
                </div>
            )}
        </div>
    );
}
