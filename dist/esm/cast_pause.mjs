export const name="cast_pause";
export const id="dl_209ffcfda525b3345789";
export const url=new URL("../icons/cast_pause.svg?v=c75b34ec8b51fbebb7167571aa0056e534c2b957eeefa3c2c90d79478bc2d148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
