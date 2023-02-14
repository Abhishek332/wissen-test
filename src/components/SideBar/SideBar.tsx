import './SideBar.css';


interface SideLinkProps {
    action: any;
    name: string;
    active?: boolean;
}

const SideLink: React.FC<SideLinkProps> = ({ action, name, active }) => {
    return <div className="side-link" style={active ? { background: "#007bff", color: "#c2c7d0" } : {}}>
        <h3 onClick={() => action(name)}>{name}</h3>
    </div>
}

const SideBar: React.FC<any> = ({ controller, selected }) => {
    return <div className="sidebar">
        <SideLink action={controller} name="table" active={selected === 'table'} />
        <SideLink action={controller} name="form" active={selected === 'form'} />
    </div>
}

export default SideBar;