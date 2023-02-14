import { useState } from "react";
import { SideBar, SideContent } from "../../components";

const TreeRoot = () => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
        <div className="tree-roo-container flex justify-between items-center">
            <SideBar controller={setSelected} selected={selected} />
            <SideContent selected={selected} />
        </div>
    )
}

export default TreeRoot