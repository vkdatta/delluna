export const name="water_medium";
export const id="dl_30af5c5d6753aa4ed5a9";
export const url=new URL("../icons/water_medium.svg?v=62fe51d2612f428da88823c39d8d6e099afd81bcba63e5131d1f3124e3bfaae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
