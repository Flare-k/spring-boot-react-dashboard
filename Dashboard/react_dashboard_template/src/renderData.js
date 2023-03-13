import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
import TransformSharpIcon from '@material-ui/icons/TransformSharp';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import SRDashboard from './components/srDashboard';
import * as data from './components/data/rawData';
import KPMGColor from './lib/color/KPMGColor';


// setting main color 
const chartColors = KPMGColor.chartColors;
const chartColor = KPMGColor.lineChartColor; // as rgb 


export const Dashboards = [
    { name: 'status', link: '/plmstatus', icon: <AssessmentSharpIcon />, component: <SRDashboard data={data} chartColors={chartColors} chartColor={chartColor} /> },
    { name: 'kibana', link: '/kinana', icon: <TransformSharpIcon />, component: <div style={{ margin: '1rem'}}>.. more charts</div> },
    /*{ name: '', link: '/home', icon: <MoreVertSharpIcon /> },*/
];
