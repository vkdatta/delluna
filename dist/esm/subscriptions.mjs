export const name="subscriptions";
export const id="dl_df193aed630af8b65212";
export const url=new URL("../icons/subscriptions.svg?v=2859786cd2cde3e19b86949b89a4c825ecbf1074ea452fbcf672a2a57bdfdfa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
