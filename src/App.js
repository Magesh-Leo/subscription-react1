import logo from './logo.svg';
import './App.css';
import Pricingcard from './pricing';

function App() {
  let pricings = [
    {
      subscription:"Free",
      price:0,
      period:"/month",
      userRes:{user:"Single User",strong:false},
      storage:"5GB Storage",
      access:"Unlimited Public Projects",
      checkAccess:"Community Access",
      projects:{scheme:"Unlimited Private Projects",Available:false},
      support:{scheme:"Dedicated Phone Support",Available:false},
      domain:{scheme:"Free Subdomain",Available:false,feature:"",strong:false},
      report:{scheme:"Monthly Status Reports",Available:false},
    },
    {
      subscription:"Plus",
      price:9,
      period:"/month",
      userRes:{user:"5 Users",strong:true},
      storage:"50GB Storage",
      access:"Unlimited Public Projects",
      checkAccess:"Community Access",
      projects:{scheme:"Unlimited Private Projects",Available:true},
      support:{scheme:"Dedicated Phone Support",Available:true},
      domain:{scheme:"Free Subdomain",Available:true,feature:"",strong:false},
      report:{scheme:"Monthly Status Reports",Available:false},
    },
    {
      subscription:"Pro",
      price:49,
      period:"/month",
      userRes:{user:"Unlimited Users",strong:true},
      storage:"5GB Storage",
      access:"Unlimited Public Projects",
      checkAccess:"Community Access",
      projects:{scheme:"Unlimited Private Projects",Available:true},
      support:{scheme:"Dedicated Phone Support",Available:true},
      domain:{scheme:"Free Subdomain",Available:true,feature:"Unlimited ",strong:true},
      report:{scheme:"Monthly Status Reports",Available:true},
    },
  ]
  return (
    <>
    <section class="pricing py-5">
        <div class="container">
            <div class="row">
                {
                  pricings.map((price) => {
                    return <Pricingcard subscription={price.subscription} price={price.price} period={price.period} 
                    userRes={price.userRes.user} checkuserRes={price.userRes.strong} storage={price.storage} access={price.access} projects={price.projects.scheme}
                    report={price.report.scheme} support={price.support.scheme} domain={price.domain.scheme}
                    checkAccess= {price.checkAccess} checkprojects={price.projects.Available} checkdomain={price.domain.Available}
                    checkdomainStrong = {price.domain.strong} domainFeature = {price.domain.feature}
                    checksupport={price.support.Available}checkreport={price.report.Available}></Pricingcard>
                  })
                }
            </div>
        </div>
    </section>
    </>
  );
}

export default App;
