import { Link } from "react-router-dom";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


const StatsPage = () => {

    const rows = [
        {
          key: "#1",
          twitter: "@offshoda",
          points: "21,431,483,314",
          mentions: "296,859",
        },
      ];
      
      const columns = [
        {
          key: "key",
          label: "Ranking",
        },
        {
          key: "twitter",
          label: "Twitter User",
        },
        {
          key: "points",
          label: "Epoch Points",
        },
        {
            key: "mentions",
            label: "Epoch Mentions",
        },
      ];
      

    return (
        <div className="tipCoin-landpage">
            <div className="tipCoin-landpageHeadText">EPOCH 3</div>
            <div style={{textAlign: "center"}} >9/19/2023 - 9/29/2023</div>

            <div className="tipCoin-table1">

                <div className="table1-content">
                    <div className="table1-contentText">EPOCH MENTIONS</div>
                    <div className="table1-contentText2">7,087,150</div>
                </div>

                <div className="table1-content table1-contentB">
                    <div className="table1-contentText">EPOCH POINTS</div>
                    <div className="table1-contentText2">100 000.00</div>
                </div>

                <div className="table1-content">
                    <div className="table1-contentText">TIME REMAINING</div>
                    <div className="table1-contentText2">10 Days</div>
                </div>
            </div>


            <div className="tipCoin-table1 responsive_table">

                <div className="table1-content table1-contentB" style={{width: "100%"}} >
                    <div className="table1-contentText">EPOCH MENTIONS</div>
                    <div className="table1-contentText2">7,087,150</div>
                </div>

                <div style={{display: "flex"}} >

                    <div className="table1-content table1-contentB">
                        <div className="table1-contentText">EPOCH POINTS</div>
                        <div className="table1-contentText2">100 000.00</div>
                    </div>
    
                    <div className="table1-content">
                        <div className="table1-contentText">TIME REMAINING</div>
                        <div className="table1-contentText2">10 Days</div>
                    </div>

                </div>

            </div>

            {/* <div className="tipCoin-statTable">
                <div className="tipCoin-statTable-top">
                    <div className="table2-top-content">Ranking</div>
                    <div className="table2-top-content">Twitter User</div>
                    <div className="table2-top-content">Epoch Points</div>
                    <div className="table2-top-content">Epoch Mentions</div>
                </div>

                <div className="tipCoin-statTable-bottom">
                    <div className="tipCoin-statTable-bottomContent">
                        <div># 1</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 2</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 3</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 4</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 5</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 6</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 7</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                    <div className="tipCoin-statTable-bottomContent">
                        <div># 8</div>
                        <Link className="" href="">@offshoda</Link>
                        <div>21,431,483,314</div>
                        <div>296,859</div>
                    </div>

                </div>
            </div> */}

            <div style={{
                // width:"80%",
                margin:"0 auto"
            }} >

            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
                </TableBody>
            </Table>

            </div>

            <div className="tipCoin-landpagebottomText1">Points are recalculated on a rolling interval and constantly internally flagged suspicious activity.</div>

        </div>
    )


}


export default StatsPage;