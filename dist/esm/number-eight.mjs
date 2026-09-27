export const name="number-eight";
export const id="dl_db0bc9dc8839459f8bf1";
export const url=new URL("../icons/number-eight.svg?v=8483d743b6eb21153e20e0c03bca00b07906898b7d16ec444eaf76ff00513713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
