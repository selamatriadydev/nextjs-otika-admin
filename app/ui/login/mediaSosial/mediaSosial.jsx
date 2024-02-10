import {Facebook, Twitter} from "feather-icons-react"
import Link from "next/link";

const MediaSosial = ()=> {
    return(
        <>
        <div className="text-center mt-4 mb-3">
            <div className="text-job text-muted">Login With Social</div>
          </div>
          <div className="row sm-gutters">
            <div className="col-6">
              <Link href="#" className="btn btn-block">
                <Facebook/> Facebook
              </Link>
            </div>
            <div className="col-6">
              <Link href="#" className="btn btn-block">
                <Twitter /> Twitter
              </Link>
            </div>
          </div>
        </>
    )
}

export default MediaSosial;