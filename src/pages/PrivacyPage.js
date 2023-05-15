import React from 'react'

const PrivacyPage = () => {


    const data = [
        {
            title: `PRIVACY POLICY`,
            content: <>This website under the domain of <b>https://ondc-food.netlify.app/</b> and all other sub-domains under the
                top level URL are operated by <b>Mahan Bharat</b> Co Ltd, hereby referred to as “ondc”
                We take your privacy very seriously and we ask that you read this privacy policy carefully as it
                contains important information on:
                <li> the personal information we collect about you</li>
                <li> what we do with your information, and</li>
                <li> who your information might be shared with.</li>
                We may change this privacy policy from time to time. You should check this policy occasionally
                to ensure you are aware of the most recent version that will apply each time you access this
                website.</>
        },
        {
            title: `Who we are`,
            content: <>ondc ('we' or 'us') are a 'data controller' for the purposes of the Personal Data Protection
                Act (PDPA) and any subsequent Inida data protection legislation and we are responsible for, and
                control the processing of, your personal information.</>
        },
        {
            title: `Who does this privacy policy apply to?`,
            content: <>This privacy policy applies to visitors to our online ordering website and those who contact us
                via our website or any of the contact methods specified on it or place an order for a product(s).</>
        },
        {
            title: `What information do we collect and process?`,
            content: <>Personal information provided by you
                During the course of accessing our website, contacting us, or otherwise dealing with us, you
                may provide us with a range of personal data which we will use in the course of our business.
                This personal information may include:
                <li> Your name or another unique identifier;</li>
                <li> Your address, lat/long information;</li>
                <li> Your age and/or date of birth;</li>
                <li> Your contact details (which may include your landline telephone number, mobile</li>
                number, and/or email address);
                <li> Payment or other financial details (e.g. payment card information, bank information);</li>
                <li> Professional information (e.g. job title and/or type, professional qualifications, industry);</li>
                and
                <li> Other related information.</li></>
        },
        {
            title: `Information we collect automatically`,
            content: <>Our website may collect certain information about you automatically (such as your IP address,
                geographical location, browser type and version, operating system).</>
        },
        {
            title: `Personal information provided by third parties`,
            content: <>Occasionally we may receive information about you from other sources (such as our suppliers,
                customers, or group companies), which we will add to the information we already hold about
                you in order to help us operate our business effectively.</>
        },
        {
            title: `Personal information about other individuals`,
            content: <>If you give us information on behalf of someone else, you confirm that the other person has
                appointed you to act on his/her behalf and has agreed that you can:
                <li> transfer the personal data and give consent on his/her behalf to the processing of his/her</li>
                personal data;
                <li> receive on his/her behalf any data protection notices;</li>
                <li> give consent to the transfer of his/her personal data abroad; and</li>
                <li> give consent to the processing of his/her sensitive personal data (if applicable).</li></>
        },
        {
            title: `How we use your data and our legal basis for processing your data.`,
            content: <>We may process your data for a variety of reasons, including to:
                <li> display the website and its functionality and enable your interaction with it;</li>
                <li> provide content, communications or information you request;</li>
                <li> fulfill your order for a product and deal with any customer support issues;</li>
                <li> respond to a request, order, enquiry or complaint you may have;</li>
                <li> customize our website and its content to your particular preferences; and</li>
                <li> improve our website and services.</li>
                In some instances, we will rely on your consent to process personal data and where we do this,
                it will be flagged to you at the time.
                When we use your personal information we are required to have a legal basis for doing so.
                There are various different legal bases upon which we may rely, depending on what personal
                information we process and why.
                The legal bases we may rely on include:
                <li> consent: where you have given us clear consent for us to process your personal</li>
                information for a specific purpose;
                <li> contract: where our use of your personal information is necessary for a contract we have</li>
                with you, or because you have asked us to take specific steps before entering into a
                contract;
                <li> legal obligation: where our use of your personal information is necessary for us to</li>
                comply with the law (not including contractual obligations); or
                <li> legitimate interests: where our use of your personal information is necessary for our</li>
                legitimate interests or the legitimate interests of a third party (unless there is a good
                reason to protect your personal information which overrides our legitimate interests).</>
        },
        {
            title: `Storage of your information and who your information might be shared with`,
            content: <>We store your personal data relating to the use of the site and purchase of products on third
                party servers.
                We may disclose your personal data to:
                <li> our online ordering platform merchants to the extent necessary for us to provide you with</li>
                access to purchase products. We will only share your data subject to a contract requiring
                them to process your personal data in accordance with the requirements prescribed by
                data protection law (and they may also transfer your personal data to their
                subcontractors and suppliers to the extent necessary to provide the services to us for
                your benefit);
                <li> other companies within our group to the extent that there is a legitimate interest in doing</li>
                so to support our business aims;
                <li> our other agents and service providers, to the extent that they require access to the data</li>
                in order to provide goods/services to us, in which case they will be bound by a contract
                requiring them to process personal data in accordance with the requirements prescribed
                by data protection law;
                <li> law enforcement agencies in connection with any investigation to help prevent unlawful</li>
                activity; and
                <li> a third party purchaser if we sell our business, in which case, customer and user</li>
                information will be a transferred asset.
            </>
        },
        {
            title: `Keeping your data secure`,
            content: <>We will use technical and organizational measures to safeguard your personal data in
                accordance with the law. While we will use all reasonable efforts to safeguard your personal
                data, you acknowledge that the use of the internet is not entirely secure and for this reason we
                cannot guarantee the security or integrity of any personal data that are transferred from you or
                to you via the internet. If you have any particular concerns about your information, please
                contact us (see ‘How to contact us’ below).</>
        },
        {
            title: `Transfers of your information out of India`,
            content: <>We may need to transfer your personal data outside India (for example to Facebook to
                process a facebook login). We will only do this if appropriate safeguards are placed in
                accordance with data protection legislation.</>
        },
        {
            title: `How long do we keep your personal information?
            `,
            content: <>We keep your personal information for as long as we need to for the purposes for which it was
                collected or (if longer) for any period for which we are required to keep personal information to
                comply with our legal and regulatory requirements.</>
        },
        {
            title: `How can you delete you personal information ?            `,
            content: <>You may request your account deletion request via our website at
                 <b> ankit.rama.yadav@gmail.com</b></>
        },
        {
            title: `Important Note about account deletion`,
            content: <>Please note that ondc uses a multi-channel
                user login system. In case you have used multiple brands across multiple channels (such as
                LINE, Google, Web, Facebook) – please list all the potential email addresses and phone
                number(s) that you have used to access our services. Please be very specific in your message,
                as to which specific account / all account(s) are you requesting your deletion for. In case your
                email is the same across all channels, your account information is automatically unified in our
                system. In this case, requesting to delete a “Facebook account” may result in irreversible
                deletion of all related accounts. Once deleted, your account information will be forever lost to
                the darkness of the universe. Upon receiving your request, you account will be immediately
                deactivated and all personal information will be removed in 5-7 business days</>
        },
        {
            title: `What rights do you have?`,
            content: <>You are responsible for ensuring that information you provide to us is accurate, complete and
                up-to-date. You can review and change your information by contacting us.
                You have a number of rights in relation to your personal data, these include the right to:
                <li> find out how we process your data;</li>
                <li> request that your personal data is corrected if you believe it is incorrect or inaccurate;</li>
                <li> obtain restriction on our, or object to, processing of your personal data;</li>
                <li> if we are relying on consent, you can withdraw your consent to our processing of your</li>
                personal data (including any direct marketing);
                <li> if we are relying on legitimate interests for direct marketing, you can object to receiving</li>
                such direct marketing;
                <li> obtain a copy of the personal data we process concerning you. We will take steps to</li>
                verify your identity before responding to your request. Once we have verified your
                identity we will respond as soon as possible and in any event within one month.
                If you would like to exercise any of your rights or find out more, please contact us via 
                 <b>  ankit.rama.yadav@gmail.com</b></>
        },
        {
            title: `Changes to this Privacy Policy`,
            content: <>We may change this Privacy Policy from time to time, and if we do so we will highlight any
                changes to these pages. If you continue to access or use our services after notified changes
                have come into effect, you will have agreed to the revised policy.</>
        },
        {
            title: `How to contact us`,
            content: <>If you have any questions about this privacy policy or the information we hold about you, please
                contact us at :  <b> ankit.rama.yadav@gmail.com</b></>
        }
    ]

 

    return (
        <div style={{ backgroundColor: "#e5e5e5", padding: "2rem 3rem" }}>
            {data.map((d, i) => {
                return (
                    <div key={i} style={{ paddingTop: "1rem" }}>
                        <h3 >{d.title}</h3>
                        <p style={{ marginLeft: "2rem" }}>{d.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PrivacyPage