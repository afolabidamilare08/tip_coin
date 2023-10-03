
const LandingPage = () => {

    return (
        <div className="tipCoin-landpage">
        <div className="tipCoin-landpageHeadText text-focus-in">TAKE 100,000 $TIP IN THE DISTRIBUTION</div>

        <div className="tipCoin-table1">

            <div className="table1-content">
                <div className="table1-contentText">VERIFICATION STATUS</div>
                <button>VERIFY</button>
            </div>

            <div className="table1-content table1-contentB">
                <div className="table1-contentText">TOTAL CLAIMS</div>
                <div className="table1-contentText2">100 000.00</div>
            </div>

            <div className="table1-content">
                <div className="table1-contentText">CLAIM WALLET</div>
                <button className="heartbeat-kit" >CONNECT</button>
            </div>
        </div>

        
        <div className="tipCoin-table1 responsive_table">

            <div className="table1-content table1-contentB" style={{width: "100%"}} >
                <div className="table1-contentText">TOTAL CLAIMS</div>
                <div className="table1-contentText2">100 000.00</div>
            </div>

            <div style={{display: "flex"}} >

                <div className="table1-content">
                    <div className="table1-contentText">VERIFICATION STATUS</div>
                    <button>VERIFY</button>
                </div>

                <div className="table1-content">
                    <div className="table1-contentText">CLAIM WALLET</div>
                    <button className="heartbeat-kit" >CONNECT</button>
                </div>

            </div>

        </div>

        <div className="tipCoin-table2">
            <div className="tipCoin-table2-top">
                <div className="table2-top-content content-epoch">Epoch</div>
                <div className="table2-top-content content-status">Status</div>
                <div className="table2-top-content content-points">Raw Epoch Points</div>
                <div className="table2-top-content content-adjust">Adjuster Epoch Points</div>
                <div className="table2-top-content content-mutiplier">Multiplier</div>
                <div className="table2-top-content content-tokens">Tokens</div>
                <div className="table2-top-content content-update">Updated At</div>
            </div>

            <div className="tipCoin-table2-bottom">Get Verified to Receive 100,000 $TIP</div>
        </div>

        <div className="tipCoin-landpagebottomText1">After an epoch, our system takes a couple of days to filter through bots and points adjustments. Please check back regularly</div>
        <div className="tipCoin-landpagebottomText2">Raw epoch points do not take into account missed tweets or outdated calculations, once our system is done processing, you 
            will see an accurate number under adjusted epoch points</div>

    </div>
    )


}


export default LandingPage;