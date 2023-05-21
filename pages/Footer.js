export default function Footer(){
    return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',color:'white',borderTopColor:'white',border:1,backgroundColor:'#202124',padding:10}}>
        <h1 style={{marginLeft:30}}>Advent'23</h1>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',margin:30,color:'white'}}>
          <a href="/team" style={{marginBottom:10}}>Team</a>
          <a href="https://instagram.com/cult_a_way/" target={'_blank'} style={{marginBottom:10}}>Cult a way</a>
          <a href="https://instagram.com/advent_sctce/" target={'_blank'} style={{marginBottom:10}}>#legacyliveson</a>
        </div>
      </div>
    );
}