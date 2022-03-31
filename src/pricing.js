import './style1.css';
export default function Pricingcard(props){
    return <>
    
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
            <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{props.subscription}</h5>
                <h6 class="card-price text-center">${props.price}<span class="period">{props.period}</span></h6>
                <hr></hr>
                <ul class="fa-ul">
                    {
                        props.checkuserRes ? <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>{props.userRes}</strong></li> : <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.userRes}</li>
                    }
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.userRes}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.storage}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.access}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.checkAccess}</li>
                    {
                        props.checkprojects ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.projects}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.projects}</li>
                    }
                    {
                        props.checksupport ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.support}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.support}</li>
                    }
                    {
                        props.checkdomain || props.checkdomainStrong ? <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>{props.domainFeature}</strong>{props.domain}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.domain}</li>
                    }
                    {
                        props.checkreport ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.report}</li> : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.report}</li>
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