export const name="currency-inr-bold";
export const id="dl_2af8333488634982baf3";
export const url=new URL("../icons/currency-inr-bold.svg?v=b592d446a418557dea96981a95b5e711add4d9e8b3d6e9fecb12c6bce30208bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
