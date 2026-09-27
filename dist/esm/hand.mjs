export const name="hand";
export const id="dl_1ba6eb4e04494e50bea4";
export const url=new URL("../icons/hand.svg?v=b015cadf1f1e9c2b61adc5b58c5e28e8b0e4e647c0a6b35e1006610c03011c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
