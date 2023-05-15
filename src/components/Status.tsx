import { StatusTyps } from "../App";

interface StatusPrpos {
    type: StatusTyps;
}

function getStatuseColor (type: StatusTyps): string {
    switch (type) {
        case "Active": return "text-bg-success";
        case "Expired": return "text-bg-warning";
        case "Banned": return "text-bg-danger";
        default: return "text-bg-secondary"
    }

}
    

function Status({ type }: StatusPrpos) {
    return ( 
        <span className={`badge ${getStatuseColor(type)}`}>{type}</span>
     );
}

export default Status;