export const name="hourglass-high-thin";
export const id="dl_21b0fde5d3064d06b4d8";
export const url=new URL("../icons/hourglass-high-thin.svg?v=d237bdc2f417cc6c5740c3402ef7c99d65f5481da535d2305a3d6886e359c40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
