export const name="subscriptions";
export const id="dl_94f459997c8442d6840a";
export const url=new URL("../icons/S/subscriptions.svg?v=2859786cd2cde3e19b86949b89a4c825ecbf1074ea452fbcf672a2a57bdfdfa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
