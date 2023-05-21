import '../styles/Footer.module.css'

export default function Footer(){
    return(
    <div className="FooterContainer">
        <h1 style={{marginLeft:30}}>Advent'23</h1>
        <div className='overallFooter'>
          <div className='contentConatiner'>
          <a href="/team" style={{marginBottom:10}}> Team Behind </a>
          <a href="https://instagram.com/cult_a_way/" target={'_blank'} style={{marginBottom:10}}>Cult a way</a>
          </div>
          <a className="motoCult"href="https://instagram.com/advent_sctce/" target={'_blank'} style={{marginBottom:10}}>#legacyliveson</a>
        </div>
      </div>
    );
}