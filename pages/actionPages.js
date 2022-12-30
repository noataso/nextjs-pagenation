import usePageChange from "../components/usePageChange";

const actionPages = () => {
    const {isNumber,pages,handleClick,handleNext,handlePrevious}=usePageChange()
    return (
        <div style={{backgroundColor:pages[isNumber].backgroundColor,width:"100%",height:"100vh",overflow:"hidden"}}>
            <div style={{fontSize:"2rem",color:pages[isNumber].color,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                <div>{pages[isNumber].content}</div>
            </div>
            <div style={{display:"flex",fontSize:"2rem",top:"85%",left:"50%",transform:"translateX(-50%)",position:"absolute"}}>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handlePrevious}>Prev</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleClick}>1</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleClick}>2</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleClick}>3</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleClick}>4</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleClick}>5</div>
                <div style={{padding:"2px 16px 8px 16px",border:"1px solid #000",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleNext}>Next</div>
            </div>
        </div>
    );
}

export default actionPages;