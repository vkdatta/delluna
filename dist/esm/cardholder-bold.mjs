export const name="cardholder-bold";
export const id="dl_9996fd3f48bc45f58f27";
export const url=new URL("../icons/cardholder-bold.svg?v=37a3e97c068aa3cd7fa6727ddd00ab8359c5800078eba05b35f06072169b2de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
