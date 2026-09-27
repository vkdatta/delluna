export const name="stripe-logo-bold";
export const id="dl_af3e39d97fd76ba754ec";
export const url=new URL("../icons/stripe-logo-bold.svg?v=d2602a5e14b3e1bf005b882e9d450eb6b661c266ef1f14c72b8ed40b5e8de0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
