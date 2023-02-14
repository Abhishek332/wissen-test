import { Table } from ".."
import { Authenticator } from "../../pages"

const SideContent: React.FC<any> = ({ selected }) => {
    const data = [
        {
            "S.No.": 1,
            "First Name": "abihshek",
            "Last Name": "porwal"

        },
        {
            "S.No.": 2,
            "First Name": "abihshek",
            "Last Name": "porwal"

        },
        {
            "S.No.": 3,
            "First Name": "abihshek",
            "Last Name": "porwal"

        },
        {
            "S.No.": 4,
            "First Name": "abihshek",
            "Last Name": "porwal"

        }
    ]



    return <div className="flex justify-center items-center" style={{ 'flex': "1" }}>
        {
            selected === 'table'
                ? <Table data={data} />
                : selected === 'form'
                    ? <Authenticator />
                    : <h4>Select a option from Sidebar</h4>
        }
    </div>
}

export default SideContent