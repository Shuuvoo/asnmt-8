import { Pie, PieChart } from "recharts";


const Piechart = ({category}) => {
 
    // Sample data
    const data = [
        { name: 'Total', donates: 12 },
        { name: 'Donated', donates: 4 },
        
    ];
 
 
    return (
        <PieChart width={600} height={500}>
            <Pie data={data} dataKey="donates" outerRadius={150} fill="green" />
        </PieChart>
    );
}
 
export default Piechart;