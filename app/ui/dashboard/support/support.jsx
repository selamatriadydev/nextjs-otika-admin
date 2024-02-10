const Support =()=>{
    return(
        <div className="row">
              <div className="col-md-6 col-lg-12 col-xl-6">
                {/* Support tickets */}
                <div className="card">
                  <div className="card-header">
                    <h4>Support Ticket</h4>
                    <form className="card-header-form">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Search"
                      />
                    </form>
                  </div>
                  <div className="card-body">
                    <div className="support-ticket media pb-1 mb-3">
                      <img
                        src="assets/img/users/user-1.png"
                        className="user-img mr-2"
                        alt=""
                      />
                      <div className="media-body ml-3">
                        <div className="badge badge-pill badge-success mb-1 float-right">
                          Feature
                        </div>
                        <span className="font-weight-bold">#89754</span>
                        <a href="#">Please add advance table</a>
                        <p className="my-1">
                          Hi, can you please add new table for advan...
                        </p>
                        <small className="text-muted">
                          Created by{" "}
                          <span className="font-weight-bold font-13">
                            John Deo
                          </span>
                          &nbsp;&nbsp; - 1 day ago
                        </small>
                      </div>
                    </div>
                    <div className="support-ticket media pb-1 mb-3">
                      <img
                        src="assets/img/users/user-2.png"
                        className="user-img mr-2"
                        alt=""
                      />
                      <div className="media-body ml-3">
                        <div className="badge badge-pill badge-warning mb-1 float-right">
                          Bug
                        </div>
                        <span className="font-weight-bold">#57854</span>
                        <a href="#">Select item not working</a>
                        <p className="my-1">
                          please check select item in advance form not work...
                        </p>
                        <small className="text-muted">
                          Created by{" "}
                          <span className="font-weight-bold font-13">
                            Sarah Smith
                          </span>
                          &nbsp;&nbsp; - 2 day ago
                        </small>
                      </div>
                    </div>
                    <div className="support-ticket media pb-1 mb-3">
                      <img
                        src="assets/img/users/user-3.png"
                        className="user-img mr-2"
                        alt=""
                      />
                      <div className="media-body ml-3">
                        <div className="badge badge-pill badge-primary mb-1 float-right">
                          Query
                        </div>
                        <span className="font-weight-bold">#85784</span>
                        <a href="#">
                          Are you provide template in Angular?
                        </a>
                        <p className="my-1">
                          can you provide template in latest angular 8.
                        </p>
                        <small className="text-muted">
                          Created by{" "}
                          <span className="font-weight-bold font-13">
                            Ashton Cox
                          </span>
                          &nbsp;&nbsp; -2 day ago
                        </small>
                      </div>
                    </div>
                    <div className="support-ticket media pb-1 mb-3">
                      <img
                        src="assets/img/users/user-6.png"
                        className="user-img mr-2"
                        alt=""
                      />
                      <div className="media-body ml-3">
                        <div className="badge badge-pill badge-info mb-1 float-right">
                          Enhancement
                        </div>
                        <span className="font-weight-bold">#25874</span>
                        <a href="#">
                          About template page load speed
                        </a>
                        <p className="my-1">
                          Hi, John, can you work on increase page speed of
                          template...
                        </p>
                        <small className="text-muted">
                          Created by{" "}
                          <span className="font-weight-bold font-13">
                            Hasan Basri
                          </span>
                          &nbsp;&nbsp; -3 day ago
                        </small>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="card-footer card-link text-center small "
                  >
                    View All
                  </a>
                </div>
                {/* Support tickets */}
              </div>
              <div className="col-md-6 col-lg-12 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Projects Payments</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Date</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John Doe </td>
                            <td>11-08-2018</td>
                            <td>NEFT</td>
                            <td>$258</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Cara Stevens</td>
                            <td>15-07-2018</td>
                            <td>PayPal</td>
                            <td>$125</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Airi Satou</td>
                            <td>25-08-2018</td>
                            <td>RTGS</td>
                            <td>$287</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Angelica Ramos</td>
                            <td>01-05-2018</td>
                            <td>CASH</td>
                            <td>$170</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Ashton Cox</td>
                            <td>18-04-2018</td>
                            <td>NEFT</td>
                            <td>$970</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>John Deo</td>
                            <td>22-11-2018</td>
                            <td>PayPal</td>
                            <td>$854</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Hasan Basri</td>
                            <td>07-09-2018</td>
                            <td>Cash</td>
                            <td>$128</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default Support;