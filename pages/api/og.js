import { ImageResponse } from "next/server";
import {useSearchParams} from 'next/navigation';

export const config ={
    runtime: 'edge'
};
export default function (){
    const search = useSearchParams();
    const image = search.get('url');
    return ImageResponse(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
            <img src={url}/>
        </div>
    );
}