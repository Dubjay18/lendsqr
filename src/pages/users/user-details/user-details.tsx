import React, { useEffect, useState } from "react";
import "./_user-details.scss";
import { scrollToTop } from "../../../utils/helper";
import InAppLayout from "../../../layout/inAppLayout";

//components
import OutlinedButton from "../../../components/common/outlined-button/outlined-button";
import BackButton from "../../../components/common/back-button/back-button";
import Card from "../../../components/common/card/card";
import StarRating from "../../../components/common/star-rating/star-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//icons
import { ReactComponent as DefaultAvater } from "../../../assets/icons/user.svg";
import GeneralInfo, { User } from "./general-info-tab";

export default function UserDetailsPage() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    scrollToTop();
    let userId = window.location.pathname.split("/")[2];

    const indexedDb =
      window.indexedDB;

    const request = indexedDb.open("usersDB", 1);

    request.onerror = function (event) {
      console.log("Error opening database");
    };

    request.onsuccess = function (event:any) {
      const db = event.target.result;
      const transaction = db.transaction("usersDB", "readonly");
      const store = transaction.objectStore("usersDB");

      const getAll = store.get(Number(userId));
      getAll.onsuccess = function (event:any) {
        setUserInfo(event.target.result);
      };

      getAll.onerror = function (event:any) {
        console.log("Error getting data");
      };

      transaction.oncomplete = function (event:any) {
        db.close();
      };
    };
  }, []);

  return (
    <InAppLayout>
      <div className="user-details-page">
        <BackButton to="/users">Back to Users</BackButton>

        <div className="page-heading">
          <div>
            <h1 className="page-title">User Details</h1>
          </div>

          <div className="button-row">
            <OutlinedButton className="blacklist-btn">
              Blacklist User
            </OutlinedButton>
            <OutlinedButton>Activate User</OutlinedButton>
          </div>
        </div>

        <Tabs>
          <Card className="basic-info-container">
            {userInfo !== null ?  <div className="basic-info">
              <div className="user-info">
                <div className="avater">
                  {userInfo?.profile?.avatar ? (
                    <img src={userInfo?.profile?.avatar} alt="avatar" />
                  ) : (
                    <DefaultAvater />
                  )}
                </div>

                <div className="name">
                  <h2>{userInfo?.userName}</h2>
                  <p>{userInfo?.uid}</p>
                </div>
              </div>

              <div className="tier">
                <p>User’s Tier</p>
                <StarRating rating={userInfo?.tier} />
              </div>

              <div className="financial-info">
                <h2>
                  {`\u20A6`}
                  {userInfo?.accountBalance}
                </h2>
                <p>
                  {userInfo?.accountNumber}/{userInfo?.bankName}
                </p>
              </div>
            </div> : null}
           

            <div className="tab-list-container">
              <TabList>
                <Tab>General Information</Tab>
                <Tab>Document</Tab>
                <Tab>Bank Details</Tab>
                <Tab>Loans</Tab>
                <Tab>Savings</Tab>
                <Tab>App and System</Tab>
              </TabList>
            </div>
          </Card>

          <Card className="full-details-container">
            <TabPanel>
              <GeneralInfo userInfo={userInfo} />
            </TabPanel>
            <TabPanel>Document</TabPanel>
            <TabPanel>Bank Details</TabPanel>
            <TabPanel>Loans</TabPanel>
            <TabPanel>Savings</TabPanel>
            <TabPanel>App and Systems</TabPanel>
          </Card>
        </Tabs>
      </div>
    </InAppLayout>
  );
}
