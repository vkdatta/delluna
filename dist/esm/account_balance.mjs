export const name="account_balance";
export const id="dl_eec93debffd3d0d2401d";
export const url=new URL("../icons/account_balance.svg?v=a273d3c0874632ccfe963543cf789ba9d1a57e6b575e4c15c907e0da0274ba0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
