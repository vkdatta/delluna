export const name="lock-laminated-open-bold";
export const id="dl_c914343530494202b571";
export const url=new URL("../icons/lock-laminated-open-bold.svg?v=067a90d2be579f71487cbc6460750767260cd32f7d14850c77b17ba194a73352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
