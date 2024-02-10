
const Card = ({item})=> {
    return(
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <div className="card-statistic-4">
                <div className="align-items-center justify-content-between">
                    <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div className="card-content">
                        <h5 className="font-15">{item.title}</h5>
                        <h2 className="mb-3 font-18">{item.number}</h2>
                        <p className="mb-0">
                            <span className={item.change > 0 ? `col-green` : `orange`}>{item.change}</span> {item.change >0 ? 'Increase' : 'Decrease'} 
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                        <img src={item.img || "/assets/img/banner/1.png"} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;