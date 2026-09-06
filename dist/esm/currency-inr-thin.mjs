export const name="currency-inr-thin";
export const id="dl_20213b4a217140b58cc7";
export const url=new URL("../icons/currency-inr-thin.svg?v=89e6d3de034f4d8a528f9b6949804b59656c795f1cbe782fce1c26d31615c5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
