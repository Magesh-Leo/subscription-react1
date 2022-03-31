import logo from './logo.svg';
import './App.css';
import Pricingcard from './pricing';

function App() {
  let plans = [
    {
      planName:"Free",
      price:0,
      period:"/month",
      features:{
        userRestriction:{
          user:"Single User",
          isBold:false
        },
        storage:"5GB Storage",
        access:"Unlimited Public Projects",
        platformAccess:"Community Access",
        projects:{
          scheme:"Unlimited Private Projects",
          isDisable:false
        },
        support:{
          scheme:"Dedicated Phone Support",
          isDisable:false
        },
        subdomain:{
          scheme:"Free Subdomain",
          isDisable:false,
          feature:"",
          isBold:false
        },
        statusReport:{
          scheme:"Monthly Status Reports",
          isDisable:false
        }
      }
    },
    {
      planName:"Plus",
      price:9,
      period:"/month",
      features:{
        userRestriction:{
          user:"5 User",
          isBold:true
        },
        storage:"50GB Storage",
        access:"Unlimited Public Projects",
        platformAccess:"Community Access",
        projects:{
          scheme:"Unlimited Private Projects",
          isDisable:true
        },
        support:{
          scheme:"Dedicated Phone Support",
          isDisable:true
        },
        subdomain:{
          scheme:"Free Subdomain",
          isDisable:true,
          feature:"",
          isBold:false
        },
        statusReport:{
          scheme:"Monthly Status Reports",
          isDisable:false
        }
      }
    },
    {
      planName:"Pro",
      price:49,
      period:"/month",
      features:{
        userRestriction:{
          user:"Unlimited Users",
          isBold:true
        },
        storage:"150GB Storage",
        access:"Unlimited Public Projects",
        platformAccess:"Community Access",
        projects:{
          scheme:"Unlimited Private Projects",
          isDisable:true
        },
        support:{
          scheme:"Dedicated Phone Support",
          isDisable:true
        },
        subdomain:{
          scheme:"Free Subdomain",
          isDisable:true,
          feature:"Unlimited ",
          isBold:true
        },
        statusReport:{
          scheme:"Monthly Status Reports",
          isDisable:true
        }
      }
    }
  ]
  return (
    <>
    <section className="pricing py-5">
        <div className="container">
            <div className="row">
                {
                  plans.map((price) => {
                    return <Pricingcard plan={price}></Pricingcard>
                  })
                }
            </div>
        </div>
    </section>
    </>
  );
}

export default App;
