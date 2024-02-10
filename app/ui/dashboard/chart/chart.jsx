const Chart = ()=>{
    return(
        <div className="row">
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Chart</h4>
                  </div>
                  <div className="card-body">
                    <div id="chart4" className="chartsh" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Chart</h4>
                  </div>
                  <div className="card-body">
                    <div className="summary">
                      <div
                        className="summary-chart active"
                        data-tab-group="summary-tab"
                        id="summary-chart"
                      >
                        <div id="chart3" className="chartsh" />
                      </div>
                      <div data-tab-group="summary-tab" id="summary-text"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Chart</h4>
                  </div>
                  <div className="card-body">
                    <div id="chart2" className="chartsh" />
                  </div>
                </div>
              </div>
            </div>
    )
}
export default Chart;