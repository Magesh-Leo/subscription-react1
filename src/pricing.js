import './style1.css';
export default function Pricingcard(props){
    return <>
    
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div class="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.plan.planName}</h5>
                <h6 className="card-price text-center">${props.plan.price}<span class="period">{props.plan.period}</span></h6>
                <hr></hr>
                <ul className="fa-ul">
                    {
                        props.plan.features.userRestriction.isBold ? <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>{props.plan.features.userRestriction.user}</strong></li> : <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.userRestriction.user}</li>
                        
                    }
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.storage}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.access}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.platformAccess}</li>
                    {
                        props.plan.features.projects.isDisable ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.projects.scheme}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.plan.features.projects.scheme}</li>
                    }
                    {
                        props.plan.features.support.isDisable ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.support.scheme}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.plan.features.support.scheme}</li>
                    }
                    {
                        props.plan.features.subdomain.isDisable || props.plan.features.subdomain.isBold ? <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>{props.plan.features.subdomain.feature}</strong>{props.plan.features.subdomain.scheme}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.plan.features.subdomain.scheme}</li>
                    }
                    {
                        props.plan.features.statusReport.isDisable ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.plan.features.statusReport.scheme}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.plan.features.statusReport.scheme}</li>
                    }
                    
                </ul>
                <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>
    </>
}