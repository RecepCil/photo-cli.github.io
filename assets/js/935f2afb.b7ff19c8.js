"use strict";(self.webpackChunkphoto_cli_documentation=self.webpackChunkphoto_cli_documentation||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro - Examples","href":"/docs/intro-examples","docId":"intro-examples"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"category","label":"Sample Usage Screenshots","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro","href":"/docs/sample-usage-screenshots/intro","docId":"sample-usage-screenshots/intro"},{"type":"link","label":"macOS","href":"/docs/sample-usage-screenshots/macos","docId":"sample-usage-screenshots/macos"},{"type":"link","label":"Windows","href":"/docs/sample-usage-screenshots/windows","docId":"sample-usage-screenshots/windows"},{"type":"link","label":"Linux","href":"/docs/sample-usage-screenshots/linux","docId":"sample-usage-screenshots/linux"}]},{"type":"link","label":"How It\'s Done?","href":"/docs/how-it-s-done","docId":"how-it-s-done"},{"type":"category","label":"Usages","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro","href":"/docs/usages/intro","docId":"usages/intro"},{"type":"link","label":"1. Names as Sequential Numbering in Same Folder Hierarchy","href":"/docs/usages/names-as-sequential-numbering-in-same-folder-hierarchy","docId":"usages/names-as-sequential-numbering-in-same-folder-hierarchy"},{"type":"link","label":"2. Group Into Taken Year/Month/Day Folders, Name as Date & Time","href":"/docs/usages/group-into-taken-year-month-day-folders-name-as-date-time","docId":"usages/group-into-taken-year-month-day-folders-name-as-date-time"},{"type":"link","label":"3. Folders Prefixed With Date Range, Names as Address & Date","href":"/docs/usages/folders-prefixed-with-date-range-names-as-address-date","docId":"usages/folders-prefixed-with-date-range-names-as-address-date"},{"type":"link","label":"4. Naming With Address, Date in Same Folder Hierarchy","href":"/docs/usages/naming-with-address-date-in-same-folder-hierarchy","docId":"usages/naming-with-address-date-in-same-folder-hierarchy"},{"type":"link","label":"5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address","href":"/docs/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address","docId":"usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address"}]},{"type":"category","label":"Address Building & Reverse Geocoding","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro","href":"/docs/address-building-reverse-geocoding/intro","docId":"address-building-reverse-geocoding/intro"},{"type":"link","label":"1. Selecting Third-Party Reverse Geocode Provider","href":"/docs/address-building-reverse-geocoding/selecting-third-party-reverse-geocode-provider","docId":"address-building-reverse-geocoding/selecting-third-party-reverse-geocode-provider"},{"type":"link","label":"2. Setting API Key","href":"/docs/address-building-reverse-geocoding/setting-api-key","docId":"address-building-reverse-geocoding/setting-api-key"},{"type":"link","label":"3. Understanding Reverse Geocode Response","href":"/docs/address-building-reverse-geocoding/understanding-reverse-geocode-response","docId":"address-building-reverse-geocoding/understanding-reverse-geocode-response"},{"type":"link","label":"4. Building Your Own Address With Selected Properties","href":"/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties","docId":"address-building-reverse-geocoding/building-your-own-address-with-selected-properties"},{"type":"link","label":"5. Merging Selected Address Level Properties Into Single Address","href":"/docs/address-building-reverse-geocoding/merging-selected-address-level-properties-into-single-address","docId":"address-building-reverse-geocoding/merging-selected-address-level-properties-into-single-address"}]},{"type":"category","label":"Commands & Verbs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"All","href":"/docs/commands-verbs/all","docId":"commands-verbs/all"},{"type":"link","label":"Info","href":"/docs/commands-verbs/info","docId":"commands-verbs/info"},{"type":"link","label":"Copy","href":"/docs/commands-verbs/copy","docId":"commands-verbs/copy"},{"type":"link","label":"Address","href":"/docs/commands-verbs/address","docId":"commands-verbs/address"},{"type":"link","label":"Settings","href":"/docs/commands-verbs/settings","docId":"commands-verbs/settings"}]},{"type":"link","label":"Command Line Arguments","href":"/docs/command-line-arguments","docId":"command-line-arguments"},{"type":"link","label":"Exit Codes","href":"/docs/exit-codes","docId":"exit-codes"},{"type":"link","label":"Settings","href":"/docs/settings","docId":"settings"},{"type":"link","label":"Roadmap","href":"/docs/roadmap","docId":"roadmap"},{"type":"link","label":"Changelog - Release History","href":"/docs/changelog-release-history","docId":"changelog-release-history"},{"type":"link","label":"Uninstallation","href":"/docs/uninstallation","docId":"uninstallation"}]},"docs":{"address-building-reverse-geocoding/building-your-own-address-with-selected-properties":{"id":"address-building-reverse-geocoding/building-your-own-address-with-selected-properties","title":"4. Building Your Own Address With Selected Properties","description":"Every reverse geocode provider has its address building parameters. With address command you can inspect any photograph\'s reverse geocode response. These different levels of selected address properties will be used in exported into CSV file for info command or used as file and/or folder names depending on your naming strategies for copy command.","sidebar":"tutorialSidebar"},"address-building-reverse-geocoding/intro":{"id":"address-building-reverse-geocoding/intro","title":"Intro","description":"If you use only photo taken date and not interested in building address from reverse geocode, you can skip reading this section. But if you want to use address (reverse geocode) in file and/or folder naming, you should read the following sections and must learn the details.","sidebar":"tutorialSidebar"},"address-building-reverse-geocoding/merging-selected-address-level-properties-into-single-address":{"id":"address-building-reverse-geocoding/merging-selected-address-level-properties-into-single-address","title":"5. Merging Selected Address Level Properties Into Single Address","description":"After selecting our properties specialized by our selected third-party reverse geocode provider, we can use our address in file and folder names. To merge address levels, - character is used as default.","sidebar":"tutorialSidebar"},"address-building-reverse-geocoding/selecting-third-party-reverse-geocode-provider":{"id":"address-building-reverse-geocoding/selecting-third-party-reverse-geocode-provider","title":"1. Selecting Third-Party Reverse Geocode Provider","description":"To build addresses we need a reserve geocode provider. Currently, there is four reverse geocode provider is supported.","sidebar":"tutorialSidebar"},"address-building-reverse-geocoding/setting-api-key":{"id":"address-building-reverse-geocoding/setting-api-key","title":"2. Setting API Key","description":"After selecting reverse geocode provider, you need to provide an API key. There are three ways to provide this API key;","sidebar":"tutorialSidebar"},"address-building-reverse-geocoding/understanding-reverse-geocode-response":{"id":"address-building-reverse-geocoding/understanding-reverse-geocode-response","title":"3. Understanding Reverse Geocode Response","description":"Every reverse geocode provider has its data and they also represent it very differently. The information returned from reverse geocode provider is different or may differ in the level of detail. As there is no way to generalize every reverse geocode provider\'s response into the same address administrative level, users must understand the response returned from their selected reverse geocode provider.","sidebar":"tutorialSidebar"},"changelog-release-history":{"id":"changelog-release-history","title":"Changelog - Release History","description":"0.1.0 (2023-06-13)","sidebar":"tutorialSidebar"},"command-line-arguments":{"id":"command-line-arguments","title":"Command Line Arguments","description":"Input Path ( -i, --input )","sidebar":"tutorialSidebar"},"commands-verbs/address":{"id":"commands-verbs/address","title":"Address","description":"Get address (reverse geocode) of single photo.","sidebar":"tutorialSidebar"},"commands-verbs/all":{"id":"commands-verbs/all","title":"All","description":"| Subcommand                                  | description                                                                                                                          |","sidebar":"tutorialSidebar"},"commands-verbs/copy":{"id":"commands-verbs/copy","title":"Copy","description":"Copies photos into new folder hierarchy with given arguments using photograph\'s taken date and coordinate address (reverse geocode).","sidebar":"tutorialSidebar"},"commands-verbs/info":{"id":"commands-verbs/info","title":"Info","description":"Creates a report (CSV file) listing all photo taken date and address (reverse geocode).","sidebar":"tutorialSidebar"},"commands-verbs/settings":{"id":"commands-verbs/settings","title":"Settings","description":"List, save and get settings.","sidebar":"tutorialSidebar"},"exit-codes":{"id":"exit-codes","title":"Exit Codes","description":"Process exit codes listed below;","sidebar":"tutorialSidebar"},"how-it-s-done":{"id":"how-it-s-done","title":"How It\'s Done?","description":"By extracting Exchangeable image file format stored on each of your photographs.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Important note: This application is a command line tool which don\'t have any user interface. To use this application, basic knowledge of how to run and send arguments to CLI applications is a must.","sidebar":"tutorialSidebar"},"intro-examples":{"id":"intro-examples","title":"Intro - Examples","description":"Nuget stable .github/workflows/stable.yml Coverage Nuget pre-release .github/workflows/preview.yml GitHub license","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"SemVer 2.0.0 is using on our project.","sidebar":"tutorialSidebar"},"sample-usage-screenshots/intro":{"id":"sample-usage-screenshots/intro","title":"Intro","description":"The following command used in all samples with test photographs.","sidebar":"tutorialSidebar"},"sample-usage-screenshots/linux":{"id":"sample-usage-screenshots/linux","title":"Linux","description":"Executing","sidebar":"tutorialSidebar"},"sample-usage-screenshots/macos":{"id":"sample-usage-screenshots/macos","title":"macOS","description":"Executing","sidebar":"tutorialSidebar"},"sample-usage-screenshots/windows":{"id":"sample-usage-screenshots/windows","title":"Windows","description":"Executing","sidebar":"tutorialSidebar"},"settings":{"id":"settings","title":"Settings","description":"User can customize & set these options via settings command.","sidebar":"tutorialSidebar"},"uninstallation":{"id":"uninstallation","title":"Uninstallation","description":"","sidebar":"tutorialSidebar"},"usages/folders-prefixed-with-date-range-names-as-address-date":{"id":"usages/folders-prefixed-with-date-range-names-as-address-date","title":"3. Folders Prefixed With Date Range, Names as Address & Date","description":"Adding day range as a prefix to existing folder names and photos copied with a file name as address and day.","sidebar":"tutorialSidebar"},"usages/group-into-taken-year-month-day-folders-name-as-date-time":{"id":"usages/group-into-taken-year-month-day-folders-name-as-date-time","title":"2. Group Into Taken Year/Month/Day Folders, Name as Date & Time","description":"Groups photos by photo taken year, month, day than copy on [year]/[month]/[day] directory with a file name as photo taken date.","sidebar":"tutorialSidebar"},"usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address":{"id":"usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address","title":"5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address","description":"Groups photos by address hierarchy than copy on [country]/[city]/[town] directory with a file name as photo taken date. Photos that don\'t have any coordinate will be copied in a relative subfolder.","sidebar":"tutorialSidebar"},"usages/intro":{"id":"usages/intro","title":"Intro","description":"We can\'t cover all possible options, because there are so many option combination. Some important copy usage examples with comparing of original photos directory structure and output directory of photo-cli listed below.","sidebar":"tutorialSidebar"},"usages/names-as-sequential-numbering-in-same-folder-hierarchy":{"id":"usages/names-as-sequential-numbering-in-same-folder-hierarchy","title":"1. Names as Sequential Numbering in Same Folder Hierarchy","description":"Preserve same folder hierarchy, copy photos with sequential number ordering by photo taken date.","sidebar":"tutorialSidebar"},"usages/naming-with-address-date-in-same-folder-hierarchy":{"id":"usages/naming-with-address-date-in-same-folder-hierarchy","title":"4. Naming With Address, Date in Same Folder Hierarchy","description":"Preserve same folder hierarchy, copy photos with a file name as photo taken date, time and address. Possible file name will have number suffix. Photos that don\'t have any coordinate or photo taken date will be copied in a relative subfolder.","sidebar":"tutorialSidebar"}}}')}}]);