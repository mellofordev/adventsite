import { ImageResponse } from "next/server";
import {useSearchParams} from 'next/navigation';

export const config ={
    runtime: 'edge'
};
export default function (req,res){
    const {searchParams} = new URL(req.url);
    var url='';
    if(searchParams.has('url')){
        url = searchParams.get('url');
    }
    return new ImageResponse(
       ( <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
            <img src={'https://adventapi.pythonanywhere.com'+url}/>
        </div>)
    );
}