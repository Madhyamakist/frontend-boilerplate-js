'use client';
import { useState } from 'react';
import Dropdown from '../components/common/dropdown';
import { DropdownOption } from '../models/dropdownOption';
import Card from '../components/common/card';
import { Department } from '../models/department';
import { fetchDepartments } from '../api/metMuseum';
import useDepartmentList from '../hooks/useDepartmentList';
import LoadingMessage from '../components/common/loadingMessage';

export default function HomePage() {
    const { loading, listItems, error: itemListError, handleDepartmentSelect } = useDepartmentList();
    const [dropdownError, setDropdownError] = useState<string | null>(null);

    const loadDepartments = async (): Promise<DropdownOption<number>[]> => {
        try {
            const data: Department[] = await fetchDepartments();
            setDropdownError(null);
            return data.map((d) => ({ label: d.displayName, value: d.departmentId }));
        } catch (err) {
            console.error('Failed to fetch departments:', err);
            setDropdownError('Failed to load departments. Please try again in some time.');
            return [];
        }
    };

    return (
        <main className="p-3">
            <h1 className='my-4'>Dynamic Page</h1>
            <h2 className="deptTxt my-1">Select Department Type</h2>
            <Dropdown label="Select Department" fetchOptions={loadDepartments} onSelect={handleDepartmentSelect} />
            {dropdownError && (
                <p className="mt-2 text-sm text-red-600">{dropdownError}</p>
            )}
            <LoadingMessage loading={loading} />

            {itemListError && (
                <p className="mt-4 text-red-600 text-sm">
                    {itemListError}
                </p>
            )}
            {!loading && !itemListError && listItems.length > 0 && (
                <div className="objCard">
                    {listItems.map((item) => (
                        <Card
                            key={item.objectID}
                            title={item.title || 'Untitled'}
                            image={item.primaryImageSmall || './placeholder.jpg'}
                            subtitle={item.artistDisplayName || 'Unknown Artist'}
                        />
                    ))}
                </div>
            )}

        </main>
    );
}
