import React from "react";
 export type User = {
  phoneNumber?: string;
  profile: Profile;
  email? :string;
  lastActiveDate?: string;
education?: Education;
socials?: Socials;
guarantor?: IGuarantor;
userName?: string;
uid?: string;
accountBalance?: string;
accountNumber?: string;
bankName?: string;
tier?: number;
 }
 interface IGuarantor{
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  gender?: string;
  address?: string;
  email?: string;
  relationship?: string;
 }
 interface Socials{
  facebook?: string;
  instagram?: string;
  twitter?: string;
 }
 interface Education {
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome: string[];
  loanRepayment:string;
 }
 interface Profile{
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  avatar?: string;
  gender?: string;
  bvn?: string;
  address?: string;
  currency?: string;
  maritalStatus?: string;
  children?: string;
 typeOfResidence?: string;
 }
export default function GeneralInfo({ userInfo }: {userInfo: User | null}) {
  return (
    <>
      <section className="detail-section personal">
        <h4 className="section-title">Personal Information</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Full Name</h6>
            <p>
              {userInfo?.profile?.firstName} {userInfo?.profile?.lastName}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Phone Number</h6>
            <p>{userInfo?.phoneNumber}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Email Address</h6>
            <p>{userInfo?.email}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">BVN</h6>
            <p>{userInfo?.profile?.bvn}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Gender</h6>
            <p>{userInfo?.profile?.gender}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Marital Status</h6>
            <p>{userInfo?.profile?.maritalStatus}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Children</h6>
            <p>{userInfo?.profile?.children}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Type of Residence</h6>
            <p>{userInfo?.profile?.typeOfResidence}</p>
          </div>
        </div>
      </section>

      <section className="detail-section employment">
        <h4 className="section-title">Education and Employment</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Level of education</h6>
            <p>{userInfo?.education?.level}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Employment Status</h6>
            <p>{userInfo?.education?.employmentStatus}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Sector of Employment</h6>
            <p>{userInfo?.education?.sector}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Employment Duration</h6>
            <p>{userInfo?.education?.duration}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">office email</h6>
            <p>{userInfo?.education?.officeEmail}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">monthly income</h6>
            <p>
              {userInfo?.education?.monthlyIncome
                .map((amount) => {
                  return `\u20A6` + amount;
                })
                .join(" - ")}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Loan Repayment</h6>
            <p>{`\u20A6${userInfo?.education?.loanRepayment}`}</p>
          </div>
        </div>
      </section>

      <section className="detail-section socials">
        <h4 className="section-title">Socials</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Twitter</h6>
            <p>{userInfo?.socials?.twitter}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">facebook</h6>
            <p>{userInfo?.socials?.facebook}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Insatgram</h6>
            <p>{userInfo?.socials?.instagram}</p>
          </div>
        </div>
      </section>

      <section className="detail-section guarantor">
        <h4 className="section-title">Guarantor</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Full Name</h6>
            <p>
              {userInfo?.guarantor?.firstName} {userInfo?.profile?.lastName}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Phone Number</h6>
            <p>{userInfo?.guarantor?.phoneNumber}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Email Address</h6>
            <p>{userInfo?.guarantor?.email}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Relationship</h6>
            <p>{userInfo?.guarantor?.relationship}</p>
          </div>
        </div>
      </section>
    </>
  );
}
