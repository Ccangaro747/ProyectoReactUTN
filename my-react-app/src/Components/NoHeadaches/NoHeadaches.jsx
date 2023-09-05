import React from 'react';
import './NoHeadaches.css';

const NoHeadaches = () => {
  return (
  <div className="comprehensive-security">
    <div className="cards-container">
      <div className="title-container">
        <h1>Tons Of Features, No Headaches</h1>
        <br />
        <p className="parrafo-nh">
          The mPower CloudSecure Suite combines the robust security features of Microsoft 365 complimented by key solutions from <br />industry-leading vendors to protect your employees, their devices, and your company's data.
        </p>
      </div>
      <div className="cards">
        {/* Tarjeta 1 */}
        <div className="card">
          <h2>Microsoft 365</h2>
          <p>
            With Microsoft 365 as the foundation of our security solution, we can help you protect your business, simplify your security strategy, and allow you to confidently embrace the cloud.
          </p>
        </div>
        
        {/* Tarjeta 2 */}
        <div className="card rectangle">
          <h2>24x7 Security Monitoring</h2>
          <p>
            Advanced 24x7 security monitoring, logging, and threat hunting for servers, desktops, firewalls, networking, security software, and cloud platforms like Microsoft 365, Azure, and AWS. Our expert team constantly monitors and analyzes network traffic, system logs, and user activities to identify and respond to potential threats in real-time. With proactive threat hunting techniques and robust incident response protocols, we ensure early detection.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="card square">
          <h2>Cloud Identity & MFA</h2>
          <p>
            Provide your employees with simplified, MFA-enabled access to the applications and data they need while controlling access and ensuring security standards are properly followed. By implementing MFA, we add an extra layer of protection to the authentication process, reducing the risk of unauthorized access and potential data breaches. With our streamlined approach, employees can conveniently and securely access the resources they need, while your organization maintains control and enforces security measures, ensuring compliance and safeguarding sensitive information.
          </p>
        </div>
        
        {/* Tarjeta 4 */}
        <div className="card square">
          <h2>SASE Secure Network</h2>
          <p>
            SASE moves the corporate networking into the cloud, supporting remote employees, protecting your networks, applications, and data, all while eliminating the cost and complexity of legacy VPNs and remote access systems. With SASE, your organization can achieve enhanced scalability, simplified management, and improved security posture, enabling secure access from any location and device, while reducing operational complexities and optimizing costs.
          </p>
        </div>
        
        {/* Tarjeta 5 */}
        <div className="card rectangle">
          <h2>SIEM</h2>
          <p>
            Our cloud-first SIEM inspects and analyzes data from your endpoints, network, and cloud services to support advanced threat hunting, incident response, and security incidents. With robust security reporting capabilities, our SIEM solution provides valuable insights and metrics to support compliance requirements and enhance overall security posture.
          </p>
        </div>
        
        {/* Tarjeta 6 */}
        <div className="card square">
          <h2>EDR Endpoint Protection</h2>
          <p>
            Our approach to threat protection goes beyond simple antivirus and firewalls. We deploy intelligent, 24x7 monitoring that ensures timely detection and response to potential security incidents, mitigating the impact and minimizing downtime. With our proactive and cutting-edge approach, you can trust that your systems, data, and operations are protected against the latest threats in the ever-evolving cybersecurity landscape.
          </p>
        </div>
        
        {/* Tarjeta 7 */}
        <div className="card rectangle">
          <h2>Phishing & Spam Protection</h2>
          <p>
            Our intelligent phishing protection dramatically reduces phishing and malware emails using advanced threat protection while providing employees with clear notifications of suspicious messages and actions they can take to report phishing attempts, even on mobile devices.
          </p>
        </div>
        
        {/* Tarjeta 8 */}
        <div className="card square">
          <h2>GRC</h2>
          <p>
            We leverage our Governance, Risk, and Compliance platform to centralize your security and compliance reporting, perform assessments, identify opportunities to strengthen security posture, and efficiently manage our mPOWER CloudSecure Program to efficiently manage and address security challenges. With our GRC platform, you can confidently navigate the complex landscape of security and compliance, making informed decisions and safeguarding your organization's reputation and assets.
          </p>
        </div>
        
        {/* Tarjeta 9 */}
        <div className="card rectangle">
          <h2>Security Awareness Training</h2>
          <p>
            While technology plays a crucial role in cybersecurity, it's important to recognize that it alone cannot completely prevent attacks. To fortify your business's defenses, we emphasize the significance of educating and testing your employees. Through automated attack simulations, we simulate real-world scenarios to assess your employees' response and identify areas for improvement. Our engaging security awareness training programs equip your staff with the knowledge and skills to recognize and respond to potential threats effectively.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NoHeadaches;
