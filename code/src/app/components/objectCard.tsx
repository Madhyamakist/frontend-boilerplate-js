export interface ArtObject {
    objectID: number;
    title: string;
    primaryImageSmall: string;
    artistDisplayName: string;
}
interface ObjectProps {
    object: ArtObject;
}



export default function ObjectCard({ object }: ObjectProps) {
    const imageURL = object.primaryImageSmall || '/placeholder.jpg';
    return (
        <div className="card">
            <h3 className="font-[500]">{object.title}</h3>
            <img
                src={imageURL}
                alt={object.title}
                className="deptImage " />

            <span className="text-sm ">{object.artistDisplayName}</span>
        </div>
    );
}
