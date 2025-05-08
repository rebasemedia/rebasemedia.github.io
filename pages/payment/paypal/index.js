import Layout from '../../../components/Layout';
import Image from 'next/image';

export default function PayPalPayment() {
  return (
    <Layout
      title="PayPal Payments - rebase media"
      description="Step-by-step guide for sending payments to rebase media via PayPal"
      canonical="https://rebasemedia.com/payment/paypal/"
      ogImage="https://rebasemedia.com/images/rebase-media-og.png"
    >
      <div className="container paypal">
        <h2>PayPal Payments</h2>
        
        <p className="intro"><strong>Procedure for Calculating Transfer Fees</strong></p>
        
        <ol>
          <li>
            To calculate the fees, visit <a href="https://smallseotools.com/paypal-fee-calculator/" target="_blank" rel="noopener noreferrer">https://smallseotools.com/paypal-fee-calculator/</a> and locate the section shown in the image below. This PayPal calculator is the most accurate one I&apos;ve found so far. I have encountered inaccuracies with others in the past, as they don&apos;t offer flexibility in choosing the Fee Rate.
            <div className="image-container">
              <Image src="/payment/paypal/paypal-1.png" alt="PayPal Calculator Interface" width={800} height={450} layout="responsive" />
            </div>
          </li>
          
          <li>
            Enter the amount in USD, in this case, $1000, and select the Fee Rate as 6.5% + $0.05 USD. Then, click on Calculate. This is the current fee rate for international micro payments. You can also verify the fee rate on the <a href="https://www.paypal.com/in/webapps/mpp/merchant-fees" target="_blank" rel="noopener noreferrer">PayPal website</a> under Micropayments section. You will also find information in the dropdown menu. If the calculator is not working, please contact us.
            <div className="image-container">
              <Image src="/payment/paypal/paypal-2.png" alt="PayPal Fee Calculation" width={800} height={450} layout="responsive" />
            </div>
          </li>
          
          <li>
            After clicking Calculate, you will see the amount to send under "You should ask for," which, in this case, is $1069.57 USD. This is the amount you should transfer to the PayPal account.
          </li>
        </ol>

        <div className="contact">
          <p>If you have any questions, please contact us at <a href="mailto:rebasemedia@gmail.com">rebasemedia@gmail.com</a></p>
        </div>
      </div>
    </Layout>
  );
} 