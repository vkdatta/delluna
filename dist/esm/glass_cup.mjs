export const name="glass_cup";
export const id="dl_be46e0a08189ac25ea0a";
export const url=new URL("../icons/glass_cup.svg?v=53a1d46454aa45cc866b4d2c612d0dca1fa8aed5d4b3181079b1d782e8f1481b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
