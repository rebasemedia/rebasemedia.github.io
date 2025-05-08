import Layout from '../../../components/Layout';
import Image from 'next/image';

export default function WisePayment() {
  return (
    <Layout
      title="Wise Payments - rebase media"
      description="Step-by-step guide for sending payments to rebase media via Wise"
      canonical="https://rebasemedia.com/payment/wise/"
      ogImage="https://rebasemedia.com/images/rebase-media-og.png"
    >
      <div className="container wise">
        <h2>Wise Payments</h2>
        
        <p className="intro"><strong>Procedure to send money to us in INR via Wise, ensuring all fees are included in the amount you transfer.</strong></p>
        
        <ol>
          <li>
            After clicking on the "Send Money" option in Wise, select the recipient currency as INR. By doing so, our account details will appear in the subsequent step. This is because our Indian account can receive payments in INR. While you&apos;re free to choose any sending currency, please ensure that you select INR as the recipient currency. If you select any other currency, our account details will not appear in the subsequent step.
            <div className="image-container">
              <Image src="/payment/wise/wise-1.png" alt="Wise Currency Selection" width={800} height={450} layout="responsive" />
            </div>
          </li>
          
          <li>
            To include all the fees, add the "Total fees" amount to the amount you want to send and keep adjusting the amount until the "Total amount we&apos;ll convert" is equal to the amount you want to send (Invoice amount). This is because the "Total amount we&apos;ll convert" is the amount that will be received by us. The "Total fees" is the amount that Wise will charge you for the transfer.
            <div className="image-container">
              <Image src="/payment/wise/wise-2.png" alt="Wise Fee Calculation" width={800} height={450} layout="responsive" />
            </div>
          </li>
          
          <li>
            In the following step, enter the recipient&apos;s email address (Email may differ from the one shown confirm before proceeding). As soon as you input the email, the recipient&apos;s account details should appear under the "On Wise" section. Click on that to proceed to the next step. If they don&apos;t, please revisit the first step to ensure you selected the recipient currency as INR.
            <div className="image-container">
              <Image src="/payment/wise/wise-3.png" alt="Wise Recipient Details" width={800} height={450} layout="responsive" />
            </div>
          </li>
          
          <li>
            Now from here you can proceed to make the payment by adding your card/bank details.
          </li>
        </ol>
        
        <div className="contact">
          <p>If you have any questions, please contact us at <a href="mailto:rebasemedia@gmail.com">rebasemedia@gmail.com</a></p>
        </div>
      </div>
    </Layout>
  );
} 