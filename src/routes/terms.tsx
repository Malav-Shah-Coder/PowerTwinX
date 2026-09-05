import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | PowerTwinX" },
      { name: "description", content: "Terms and Conditions for PowerTwinX." }
    ]
  }),
  component: TermsPage,
});

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative z-10 mx-auto w-full max-w-4xl px-6 py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-volt" />
      {children}
    </span>
  );
}

export function TermsPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-volt/5 to-transparent pointer-events-none" />

      {/* Hero */}
      <Section className="mt-32 pb-4">
        <div className="reveal">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-light">
            Terms <span className="text-gradient-volt font-medium">& Conditions</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Effective date: 2026-08-22
          </p>
          <div className="mt-8">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('terms-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="rounded-full bg-volt text-black px-8 py-3 text-sm font-medium shadow-[var(--shadow-soft)] hover:scale-105 transition-transform"
            >
              Read Now
            </button>
          </div>
        </div>
      </Section>

      <Section className="pt-4 flex-1">
        <div id="terms-content" className="reveal card-soft p-8 md:p-12 prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-volt scroll-mt-32">
          
          <h2 className="text-2xl font-medium text-foreground mb-4">Terms and conditions</h2>
          <p>The below terms of the policy are on behalf of PowerTwinX which owns and operates www.powertwinx.com. Please read the terms and conditions document carefully before using the www.powertwinx.com. By using the said website, you signify your agreement to be bound by PowerTwinX’s terms and conditions.</p>
          <p>In addition, when you use any current or future PowerTwinX service, you will also be subject to the terms and conditions applicable to that PowerTwinX service. ("terms"). If these conditions of use are inconsistent with such terms, the terms will control.</p>
          <p>PowerTwinX provides you (hereinafter referred to as, “you”, “your” or “user”) a secure platform for creating, managing, and verifying digital certificates.</p>
          <p>Please note that your visit, use of or access to our website are subject to the following terms; if you do not agree to all of the following, you may not use or access the services in any manner.</p>
          <p>This terms of service agreement (the "agreement") governs your use of this website, [powertwinx.com], owned by [PowerTwinX] of service on this website. This agreement includes, and incorporates by this reference, the policies and guidelines referenced below.</p>
          
          <p>[PowerTwinX] reserves the right to change or revise the terms and conditions of this agreement at any time by posting any changes or a revised agreement on this website. [PowerTwinX] will alert you that changes or revisions have been made by indicating on the top of this agreement the date it was last revised. The changed or revised agreement will be effective immediately after it is posted on this website. Your use of the website following the posting any such changes or of a revised agreement will constitute your acceptance of any such changes or revisions.</p>
          <p>[PowerTwinX] encourages you to review this agreement whenever you visit the website to make sure that you understand the terms and conditions governing use of the website. This agreement does not alter in any way the terms or conditions of any other written agreement you may have with [PowerTwinX] for other services. If you do not agree to this agreement (including any referenced policies or guidelines), please immediately terminate your use of the website.</p>
          <p>Neither We nor any of our Employees or Agents shall be liable for any advice or representation made by it/him/her under this agreement and it will be the user’s responsibility to make an independent assessment pursuant to services or availing services from the third-party provider.</p>
          <p>You acknowledge and agree that we do not guarantee that availing of the services from the website will not at any time be affected by technical failures, timely regulatory compliance to a new law. We will not be liable to the user for any error of Judgement or loss suffered by the user in connection with the services provided to the user.</p>
          <p>Proprietary rights. [PowerTwinX] has proprietary rights and trade secrets in the services. You may not copy, reproduce, resell or redistribute any services by [PowerTwinX]. [PowerTwinX] also has rights to all trademarks and trade dress and specific layouts of this webpage, including calls to action, text placement, images and other information.</p>
          
          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">1. Website</h2>
          <p>Content; intellectual property; third party links. In addition to making services available. [PowerTwinX] does not always create the information offered on this website; instead, the information is often gathered from other sources to the extent that [PowerTwinX] does create the content on this website, such content is protected by intellectual property laws of the India, foreign nations, and international bodies. unauthorized use of the material may violate copyright, trademark, and/or other laws. You acknowledge that your use of the content on this website is for personal, noncommercial use. any links to third-party websites are provided solely as a convenience to you. [PowerTwinX] does not endorse the contents on any such third-party websites. [PowerTwinX] is not responsible for the content of or any damage that may result from your access to or reliance on these third-party websites. if you link to third-party websites, you do so at your own risk.</p>
          <p>use of website; [PowerTwinX] is not responsible for any damages resulting from use of this website by anyone. You will not use the website for illegal purposes. you will (1) abide by all applicable local, state, national, and international laws and regulations in your use of the website (including laws regarding intellectual property), (2) not interfere with or disrupt the use and enjoyment of the website by other users, (3) not resell material on the website, (4) not engage, directly or indirectly, in transmission of "spam", chain letters, junk mail or any other type of unsolicited communication, and (5) not defame, harass, abuse, or disrupt other users of the website license.</p>
          <p>By using this website, you are granted a limited, non-exclusive, nontransferable right to use the content and materials on the website in connection with your normal, noncommercial, use of the website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from [PowerTwinX] or the applicable third party (if third party content is at issue).</p>
          <p>posting. By posting, storing, or transmitting any content on the website, you hereby grant [PowerTwinX] a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and license to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world. [PowerTwinX] does not have the ability to control the nature of the user-generated content offered through the website. You are solely responsible for your interactions with other users of the website and any content you post. [PowerTwinX] is not liable for any damage or harm resulting from any posts by or interactions between users. [PowerTwinX] reserves the right, but has no obligation, to monitor interactions between and among users of the website and to remove any content [PowerTwinX] deems objectionable, in PowerTwinX sole discretion.</p>
          
          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">2. Disclaimer of Warranties</h2>
          <p>Your use of this website are at your sole risk. The website and services are offered on an "as is" and "as available" basis. [PowerTwinX] expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose and non-infringement with respect to the services or website content, or any reliance upon or use of the website content or services. ("Services" include Trial Services.) without limiting the generality of the foregoing, [PowerTwinX] makes no warranty that the information provided on this website is accurate, reliable, complete, or timely that the links to third-party websites are to information that is accurate, reliable, complete, or timely. No advice or information, whether oral or written, obtained by you from this website will create any warranty not expressly stated herein as to the results that may be obtained from the use of the Services or that defects in services will be corrected regarding any services purchased or obtained through the website some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.</p>
          
          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">3. Limitation of Liability</h2>
          <p>[PowerTwinX] entire liability, and your exclusive remedy, in law, in equity, or otherwise, with respect to the website content and services and/or for any breach of this agreement is solely limited to the amount you paid, less shipping and handling, for services purchased via the website.</p>
          <p>[PowerTwinX] will not be liable for any direct, indirect, incidental, special or consequential damages in connection with this agreement or the services in any manner, including liabilities resulting from (1) the use or the inability to use the website content or services; (2) the cost of procuring substitute services or content; (3) Services purchased or obtained or transactions entered into through the website; or (4) any lost profits you allege.</p>
          <p>Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages so some of the above limitations may not apply to you.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">4. Indemnification</h2>
          <p>You will release, indemnify, defend and hold harmless [PowerTwinX], and any of its contractors, agents, employees, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs and expenses, including reasonable attorneys' fees and expenses, of third parties relating to or arising out of (1) this agreement or the breach of your warranties, representations and obligations under this agreement; (2) the website content or your use of the website content; (3) services or your use of the services (including services); (4) any intellectual property or other proprietary right of any person or entity; (5) your violation of any provision of this agreement; or (6) any information or data you supplied to [PowerTwinX]. When [PowerTwinX] is threatened with suit or sued by a third party, [PowerTwinX] may seek written assurances from you concerning your promise to indemnify [PowerTwinX]; your failure to provide such assurances may be considered by [PowerTwinX] to be a material breach of this agreement. [PowerTwinX] will have the right to participate in any defense by you of a third-party claim related to your use of any of the website content or products/services, with counsel of [PowerTwinX] choice at its expense. [PowerTwinX] will reasonably cooperate in any defense by you of a third-party claim at your request and expense. you will have sole responsibility to defend [PowerTwinX] against any claim, but you must receive [PowerTwinX] prior written consent regarding any related settlement. the terms of this provision will survive any termination or cancellation of this agreement or your use of the website or products/services.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">5. Privacy</h2>
          <p>[PowerTwinX] believes strongly in protecting user privacy and providing you with notice of PowerTwinX use of data. please refer to [PowerTwinX] privacy policy, incorporated by reference herein, that is posted on the website.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">6. Agreement to be bound</h2>
          <p>By using this website or services, you acknowledge that you have read and agree to be bound by this agreement and all terms and conditions on this website.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">7. General</h2>
          <p>Force majeure. [PowerTwinX] will not be deemed in default hereunder or held responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, act of god, war, terrorism, armed conflict, labor strike, lockout, or boycott.</p>
          <p>Cessation of operation. [PowerTwinX] may at any time, in its sole discretion and without advance notice to you, cease operation of the website and distribution of the products/services.</p>
          <p>Entire agreement. this agreement comprises the entire agreement between you and [PowerTwinX] and supersedes any prior agreements pertaining to the subject matter contained herein.</p>
          <p>Effect of waiver. the failure of [PowerTwinX] to exercise or enforce any right or provision of this agreement will not constitute a waiver of such right or provision. If any provision of this agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of this agreement remain in full force and effect.</p>
          <p>Governing law; jurisdiction. this website originates from Ahmedabad (Gujarat). This agreement will be governed by the laws of the union of india without regard to its conflict of law principles to the contrary. Neither you nor [PowerTwinX] will commence or prosecute any suit, proceeding or claim to enforce the provisions of this agreement, to recover damages for breach of or default of this agreement, or otherwise arising under or by reason of this agreement, other than in courts located in the union of India. By using this website or our services, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding or claim arising under or by reason of this agreement. You hereby waive any right to trial by court arising out of this agreement and any related documents.</p>
          <p>Statute of limitation. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the website or Services or this agreement must be filed within one (1) year after such claim or cause of action arose or be forever barred.</p>
          <p>Waiver of class action rights. By entering into this agreement, you hereby irrevocably waive any right you may have to join claims with those of other in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connection with this agreement must be asserted individually.</p>
          <p>Termination. [PowerTwinX] reserves the right to terminate your access to the website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this agreement. Following termination, you will not be permitted to use the website and [PowerTwinX] may, in its sole discretion and without advance notice to you, cancel any outstanding orders for services. If your access to the website is terminated, [PowerTwinX] reserves the right to exercise whatever means it deems necessary to prevent unauthorized access of the website. This agreement will survive indefinitely unless and until [PowerTwinX] chooses, in its sole discretion and without advance to you, to terminate it.</p>
          <p>domestic use. [PowerTwinX] makes no representation that the website or products/services are appropriate or available for use in locations outside India. Users who access the website from outside india do so at their own risk and initiative and must bear all responsibility for compliance with any applicable local laws.</p>
          <p>Assignment. You may not assign your rights and obligations under this agreement to anyone. [PowerTwinX] may assign its rights and obligations under this agreement in its sole discretion and without advance notice to you.</p>
          <p>By using this website or ordering services from this website you agree to be bound by all of the terms and conditions of this agreement.</p>
          
          <p>The below terms of the policy are on behalf of [PowerTwinX] which owns and operates brand PowerTwinX and such other brand as may be declared from time to time and covers the entire ambit and scope of websites and other portals wherein the company may choose to have a presence and may use its brand interchangeably.</p>
          <p>We will allow minors as nominees too subject to parental/guardian consent.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">Other limitations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We reserve the right to accept or refuse membership in our discretion.</li>
            <li>We may send you email and other communications related to and your membership (regardless of any settings or preferences related to your PowerTwinX account).</li>
            <li>You may not transfer or assign your membership or any benefits, except as allowed in these terms.</li>
            <li>Members are not permitted to purchase products for the purpose of resale, rental, or to ship to their customers or potential customers using benefits.</li>
            <li>From time to time, PowerTwinX may choose in its sole discretion to add or remove membership benefits.</li>
          </ul>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">Agreement changes</h2>
          <p>We may in our discretion change these terms, PowerTwinX conditions of use, conditions of sale and privacy notice, or any aspect of membership, without notice to you. if any change to these terms is found invalid, void, or for any reason unenforceable, that change is severable and does not affect the validity and enforceability of any remaining changes or conditions. your continued membership after we change these terms constitutes your acceptance of the changes. if you do not agree to any changes, you must cancel your membership.</p>
          
          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">Termination by us</h2>
          <p>We may terminate your membership at our discretion without notice.</p>
          
          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">Subscription at PowerTwinX</h2>
          <p>Subscribing to services is subject to the following terms and conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The user may subscribe to our different plans either yearly or for a lifetime as per the prevailing fee and consequent to the features/benefits received.</li>
            <li>This fee once paid is non-refundable under any circumstance.</li>
            <li>There is no provision to stop/pause or proportionately use our services, they are for the full duration of the fee paid.</li>
            <li>We may get a mandate signed from our users which helps us enable a smooth payment/renewal process.</li>
            <li>The user understands that the account is of a non-assignable or non-transferable nature.</li>
          </ul>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">Promotional trial memberships</h2>
          <p>We may sometimes offer trials or other promotional memberships to certain customers, which are subject to these terms except as otherwise stated in the relevant promotional offers. such trial or promotional memberships may be subject to conditions prescribed by PowerTwinX. These relevant conditions and the term / tenure for such promotional memberships may be different from the terms.</p>
          <p>Some of such trials or promotional membership may be available to you only in the event auto renewal of your membership is enabled for your membership.</p>

          <h2 className="text-2xl font-medium text-foreground mt-10 mb-4">General terms applicable to all our policies:</h2>
          <p>The below terms of the policy are on behalf of several services private limited which owns and operates brand PowerTwinX, and such other brand as may be declared from time to time and covers the entire ambit and scope of websites and other portals wherein the company may choose to have a presence and may use its brand interchangeably.</p>
          <p>When any user or vendor works or otherwise interacts with the company, he/she unequivocally agrees with the following terms and conditions:</p>
          <p><strong>Non assignable</strong><br/>The user/vendor may not assign or transfer (whether by operation of law or otherwise) this agreement (or any rights or obligations hereunder) to a third person without the prior written consent of the other party.</p>
          <p><strong>Force majeure</strong><br/>in the event either party is unable to perform its obligations under the terms of this agreement because of acts of god, strikes, equipment or transmission failure or damage reasonably beyond its control, or other causes reasonably beyond its control, such party shall not be liable for damages to the other for any damages resulting from such failure to perform or otherwise from such causes.</p>
          <p><strong>Entire agreement</strong><br/>these terms and policies constitutes the entire agreement between the parties hereto with respect to the subject matter contained in this agreement and supersedes all prior agreements, understandings and negotiations between the parties.</p>
          <p><strong>Severability</strong><br/>If any provision of these terms shall be held or made invalid by a court decision, statute, rule or otherwise, the remainder of this agreement shall not be affected thereby.</p>
          <p><strong>Confidentiality</strong><br/>the user/vendor shall not, without the written consent of the other, or as specified below, communicate confidential information of the other orally or in writing (including, without limitation, future business plans and services and the identity and addresses of the users) to any third party and shall protect such information from inadvertent disclosure to any third party in the same manner that it protects its own confidential information. each party’s obligations of confidentiality and non-disclosure shall not apply to disclosures to such party’s counsel or other advisors or to a court, arbitration panel or other similar body, in the event such party has a bona fide dispute with the other party regarding this agreement.</p>
          <p><strong>Indemnification</strong><br/>In no event shall PowerTwinX or its directors, employees, associates, partners, or suppliers will be liable to you for any loss or damage that may cause or arise from or in relation to these terms and conditions or due to use of this Website. You agree to indemnify PowerTwinX or its directors, employees, associates, partners or suppliers for all the liabilities (including claims, damages, suits or legal expenses in defending itself in relation to the foregoing) arising due to (i) use or misuse of the Portal (ii) non-performance and/or non-observance of the duties and obligations under these terms and conditions or due to your acts or omissions (iii) any act, neglect, misconduct or fraud on your part. You warrant that all the details and information provided by you to PowerTwinX or its directors, employees, associates, partners, or suppliers while using this website (including for the purposes of carrying out investments) shall be correct, accurate and genuine. Further, you shall be solely responsible for any investment decision taken by you on the services and PowerTwinX shall not be liable for any loss or damage caused to you or other users of this website due to such investment decision, or any kind of reliance upon it. You expressly agree that use of the website is at your sole risk.</p>
          <p>To the fullest extent permissible pursuant to applicable law, PowerTwinX and its directors, employees, associates, third-party partners or suppliers disclaim all warranties or guarantees – whether statutory, express or implied – including, but not limited to, implied warranties of merchantability, fitness and non-infringement of proprietary rights. No advice or information, whether oral or written, obtained by you from PowerTwinX or through the website will create any warranty or guarantee other than those expressly stated herein.</p>
          <p><strong>Governing law</strong><br/>These terms and policies shall be governed by, and construed in accordance with, the laws of the union of india, state of Gujarat, city of Ahmedabad.</p>
          <p><strong>Jurisdiction</strong><br/>All parties subject themselves to the exclusive jurisdiction of arbitrators and courts based out of city of Ahmedabad.</p>
          <p><strong>Dispute resolution</strong><br/>Any dispute or controversy arising under or in connection with these terms and policies shall be settled exclusively by arbitration in accordance with the rules of the Indian arbitration law, with a single arbitrator appointed by the company, with the seat of arbitrator at Ahmedabad.</p>
          <p><strong>Amendment</strong><br/>These terms and policies may be altered and updated. Any alteration/updated policy will be posted on our website/portal.</p>
          <p><strong>Advice of counsel</strong><br/>Each party acknowledges that, in executing this agreement, such party has had the opportunity to seek the advice of independent legal counsel, and has read and understood all of the terms and provisions of this agreement. this agreement shall not be construed against any party by reason of the drafting or preparation hereof.</p>
          <p><strong>No partnership or agency</strong><br/>nothing in these terms and policies are intended to or shall operate to create a partnership between the parties, or authorise either party to act as agent for the other, and neither party shall have the authority to act in the name or on behalf of or otherwise to bind the other in any way (including, but not limited to, the making of any representation or warranty, the assumption of any obligation or liability and the exercise of any right or power).</p>
          <p><strong>Ip and retention of title</strong><br/>The company has and will retain solely and exclusively all title of any intellectual property created to the exclusion of all others including therein but not limited to its users or vendors.</p>
          <p>PowerTwinX Website is protected by copyright, trademarks, patents, trade secret and/or other relevant intellectual property laws. no information, content or material from the website may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way without PowerTwinX express written permission. You are hereby given a limited licence to use the website for your personal and non-commercial use, subject to your agreement of these terms. You agree not to sell, license, distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of the PowerTwinX Website.</p>
          <p><strong>Ahmedabad Jurisdiction</strong><br/>If you choose to visit the website, your visit and any dispute over privacy is subject to this policy and the website's terms of use. In addition to the foregoing, any disputes arising under this policy shall be governed by the laws of India, state of Gujarat, city of Ahmedabad.</p>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
