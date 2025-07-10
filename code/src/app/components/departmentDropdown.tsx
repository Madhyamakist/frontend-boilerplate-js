'use client';

import { useEffect, useState } from 'react';

interface Department {
    departmentId: number;
    displayName: string;
}

interface Props {
    onSelect: (id: number) => void;
}

export default function DepartmentDropdown({ onSelect }: Props) {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select Department');

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const res = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setDepartments(data.departments);
            } catch (error) {
                console.error("Failed to fetch departments:", error);
            }
        };

        fetchDepartments();
    }, []);


    const handleSelect = (name: string, id: number) => {
        setSelected(name);
        onSelect(id);
        setIsOpen(false);
    };

    return (
        <div className="p-4">
            <button
                className="btnDropdown"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <span className="arrow">▾</span>
            </button>
            {isOpen && (
                <ul className=" txt">
                    {departments.map((dept) => (
                        <li
                            key={dept.departmentId}
                            className="listItem"
                            onClick={() => handleSelect(dept.displayName, dept.departmentId)}
                        >
                            {dept.displayName}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}
