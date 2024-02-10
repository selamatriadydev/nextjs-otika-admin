import Card from "../ui/dashboard/card/card";
import cards from "../data/dashboard/cards";
import Revenue from "../ui/dashboard/revenue/revenue";
import Chart from "../ui/dashboard/chart/chart";
import Task from "../ui/dashboard/task/task";
import Support from "../ui/dashboard/support/support";
import SettingSidebar from "../ui/dashboard/setting/settingSidebar";
const Dashboard = ()=> {
    return(
        <>
        <section className="section">
            <div className="row ">
                {cards.map((card)=>(
                    <Card item={card} />
                ))}
            </div>
            <Revenue/>
            <Chart/>
            <Task/>
            <Support/>
        </section>
          <SettingSidebar/>
        </>
    )
}

export default Dashboard;