function Test1()
{
  Browsers.Item(btFirefox).Run("https://smartbear.com/");
  aqObject.CheckProperty(Aliases.browser.pageSoftwareTestingMonitoringDev.form.textnode, "contentText", cmpEqual, "Unleash your passion to create great software,\nthink bigger, and build smarter");
}