import React from 'react'

const TermPage = () => {

    const data = [
        {
            title: "LEGAL AGREEMENT",
            content: <>These are the terms and conditions (“Terms”) that govern your use of this website and any
                purchase of a Product (“Food Delivery or Pickup”).
                This forms a legal agreement between you, the user of the website and purchaser of any
                Product(s), and <b>Mahan Bharat</b> Co Ltd ( “we”, “us”, “our”) and you must agree to these Terms in
                order to purchase a Product(s)
                If you do not accept these Terms, you should not make any further use of this website and you
                will not be able to purchase a Product(s).</>
        },
        {
            title: `ORDERING A PRODUCT(S)`,
            content: <>The website enables you to purchase a Product(s) from our merchants, NOT us. You should
                ensure that, prior to submitting an order, you review the details of the Product(s), including any
                conditions and exclusions of the Product(s). Those conditions and exclusions apply in addition
                to these Terms.
                Please check your order carefully before submitting it. You can correct errors before submitting
                the order. Submission of the order constitutes an offer to purchase the Product(s) from us,
                subject to these Terms. You undertake that all details you provide are correct, that the payment
                card or bank account is your own and that there are sufficient funds to cover the cost of the
                Product(s) ordered.
                We may contact you to say that we do not accept your order. This is typically where the
                Product(s) are not available, we cannot authorize your payment, you are not eligible to purchase
                the Product(s), or there has been a mistake in the pricing or description of the Product(s).
                We will only accept your order when we email you to confirm this. At this point, a binding legal
                contract will be in place between you and the merchant. You should check that the details in the
                confirmation are correct and notify us immediately if there is any error.</>
        },
        {
            title: `PAYMENT`,
            content: <>We accept payment by credit or debit card (Visa, Mastercard, or American Express) or QR
                Cash Promptpay. Payments are processed via our nominated third party payment processor.
                Your payments are DIRETLY remitted to the merchant you are purchasing food from. You are
                NOT paying us. We will not issue the Product(s) to you unless and until full payment is received. If we are
                unable to authorize your payment, we will use reasonable efforts to notify you and give you the
                opportunity to rectify the issue. If we are unable to do so, we will cancel the order.</>
        },
        {
            title: `ISSUING & DELIVERING PRODUCT(S)`,
            content: <>We, or our nominated third party logistics (3PL) providers shall deliver the Product(s) to you at
                the delivery address specified in the order. This is typically done within one (1) hour of us
                confirming acceptance of your order under normal weather conditions.
                If you do not receive your Product(s) within two (2) hours of our confirmation, you may contact
                us via the details shown on the website or in the confirmation, and we will do our best to
                investigate and assist.
                All Products are non-refundable and non-transferable unless otherwise agreed by the merchant. </>
        },
        {
            title: `LIABILITY`,
            content: <>Nothing in this agreement shall limit or exclude the Seller’s liability for death or personal injury
                caused by its negligence, fraud or fraudulent misrepresentation, or in relation to any liability
                which by law may not be limited or excluded.
                This website and the Products are available for personal use only and accordingly, the Seller
                shall not be liable for any business losses, including any loss of profits, business, revenue,
                goodwill, savings, anticipated savings (whether direct or indirect). The Seller shall not be liable
                for any indirect or consequential losses howsoever caused.</>
        },
        {
            title: `INTELLECTUAL PROPERTY RIGHTS`,
            content: <>The website and all content, images and materials published on it is protected by copyright and
                other intellectual property rights and laws. You may access and use the website for personal
                purposes only and not for any other purpose. None of the content may be downloaded, copied,
                reproduced, transmitted, sold or distributed for any commercial purposes without our prior
                written consent.</>
        },
        {
            title: `ASSIGNATION`,
            content: <>You may not assign, sub-licence or otherwise transfer any of your rights under these Terms
                without our prior written consent. Your privacy is important to us and we are committed to maintaining the privacy of any personal
                information received from you. We comply with Inidan’s data protection legislation, including
                the Personal Data Protection Act (PDPA).
                By using our website and purchasing a Product(s), you agree that you have read and accepted
                our privacy policy, available at <b>https://ondc-food.netlify.app/</b> .
            </>
        },
        {
            title: `How can you delete you personal information ?`,
            content: <>You may request account deletion via <b>https://ondc-food.netlify.app/</b>  </>
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
                deactivated and all personal information will be removed in 5-7 business days.</>
        },
        {
            title: `GENERAL`,
            content: <>Whilst reasonable efforts are used to ensure that the website is complete and accurate and
                made available at all times, the website is provided “as is” and without any warranties or
                guarantees. In particular, we do not warrant that the website will always be available or will be
                error-free. We may alter or revoke access to the website at any time.
                If any or the provisions of these Terms are held invalid, illegal or unenforceable for any reason
                by any court or competent jurisdiction, such provision shall be severed and the remainder of the
                provisions hereof shall continue in full force and effect as if the Terms had been accepted with
                the invalid illegal or unenforceable provision eliminated.
                We shall not be liable for any delay or failure to perform any of the obligations under these
                Terms if such delay or failure is due to any cause or circumstances beyond our reasonable
                control.
                We may vary these terms and conditions from time to time by publishing the varied terms on the
                website, provided that this shall not apply to any Products already purchased.
                These terms and our contract with you shall be governed by and construed in accordance with
                the laws of Inidan. Any disputes arising out of or in connection with this agreement shall be
                subject to the non-exclusive jurisdiction of the Inidan courts.</>
        }
    ]
    console.log('data', data)

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

export default TermPage