'use client';
import Dropdown, { DropdownOption } from '../components/common/dropdown';
import Card from '../components/common/card';
import { Department } from '../models/listItems';
import { fetchDepartments } from '../api/metMuseum';
import useDepartmentList from '../hooks/useDepartmentList';

export default function HomePage() {
    const { loading, listItems, handleDepartmentSelect } = useDepartmentList();

    const loadDepartments = async (): Promise<DropdownOption<number>[]> => {
        const data: Department[] = await fetchDepartments();
        return data.map((d) => ({ label: d.displayName, value: d.departmentId }));
    };

    return (
        <div className="p-4 justify-center">
            <h1>Dynamic Page</h1>
            <h2 className="deptTxt">Select Department Type</h2>
            <Dropdown label="Select Department" fetchOptions={loadDepartments} onSelect={handleDepartmentSelect} />

            {loading ? (
                <p className="mt-6">Loading...</p>
            ) : (
                <div className="objCard">
                    {listItems.map(item => (
                        <Card
                            key={item.objectID}
                            title={item.title}
                            image={item.primaryImageSmall}
                            subtitle={item.artistDisplayName}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
