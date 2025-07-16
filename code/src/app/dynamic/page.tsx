'use client';
import Dropdown from '../components/common/dropdown';
import { DropdownOption } from '../models/dropdownOption';
import Card from '../components/common/card';
import { Department } from '../models/department';
import { fetchDepartments } from '../api/metMuseum';
import useDepartmentList from '../hooks/useDepartmentList';

export default function HomePage() {
    const { loading, listItems, handleDepartmentSelect } = useDepartmentList();

    const loadDepartments = async (): Promise<DropdownOption<number>[]> => {
        const data: Department[] = await fetchDepartments();
        return data.map((d) => ({ label: d.displayName, value: d.departmentId }));
    };

    return (
        <main className="p-3">
            <h1 className='my-4'>Dynamic Page</h1>
            <h2 className="deptTxt my-1">Select Department Type</h2>
            <Dropdown label="Select Department" fetchOptions={loadDepartments} onSelect={handleDepartmentSelect} />

            {loading ? (
                <p className="mt-6">Loading...</p>
            ) : (
                <div className="objCard">
                    {listItems.map(item => (
                        <Card
                            key={item.objectID}
                            title={item.title || 'Untitled'}
                            image={item.primaryImageSmall || '/placeholder.jpg'}
                            subtitle={item.artistDisplayName  || 'Unknown Artist'}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}
