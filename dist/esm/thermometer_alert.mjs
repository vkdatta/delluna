export const name="thermometer_alert";
export const id="dl_f75b6157e2039996c749";
export const url=new URL("../icons/thermometer_alert.svg?v=878307e8690a4deaa2998aef40e7dcc7d40ca4c65b8c1ffe68395e59c98a779d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
