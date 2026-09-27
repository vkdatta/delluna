export const name="railway_alert_2-fill";
export const id="dl_43b1f021c0355dceddad";
export const url=new URL("../icons/railway_alert_2-fill.svg?v=4d8260092df2b90ec9a29e2153bec7866ebfb258b813e7b1270db12f4ba60c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
