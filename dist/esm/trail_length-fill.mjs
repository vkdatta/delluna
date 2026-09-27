export const name="trail_length-fill";
export const id="dl_ee1c795a94c80c550b35";
export const url=new URL("../icons/trail_length-fill.svg?v=1bbae2531fad5c8596a3c048a01d10b71f477635bd22e083b38236227adcaf03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
