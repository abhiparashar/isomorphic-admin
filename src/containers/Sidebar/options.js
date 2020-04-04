const options = [
  {
    key: "table",
    label: "Microservices",
    leftIcon: "ion-android-menu",
    children: [
      {
        key: 'whitelist-service',
        label: "sidebar.whitelistService"
      },
      {
        key: "token-service",
        label: "sidebar.tokenService"
      }, {
        key: 'kyc-service',
        label: "sidebar.kycService"
      },
      {
        key: "profile-service",
        label: "sidebar.profileService"
      }, {
        key: "messaging-service",
        label: "sidebar.messagingService"
      }

    ]
  }
];
export default options;
