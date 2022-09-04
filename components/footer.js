import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return (
        <div style={{display:"flex", flexFlow:"row nowrap" ,justifyContent:"space-around", minHeight:"200px", backgroundColor:"black", color:"white", paddingTop:"70px"}}>
            <div>
                <GitHubIcon />
            </div>
            <div>
            Tgb &copy; 2022
            </div>
        </div>
    )
}