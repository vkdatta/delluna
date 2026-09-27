export const name="cloud-arrow-up";
export const id="dl_e18cb489ea374e97ba4c";
export const url=new URL("../icons/cloud-arrow-up.svg?v=8d636ff4d70808e0a57b48ad12f9b2c9838af9f1305228f4b1b770e3e09f7991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
