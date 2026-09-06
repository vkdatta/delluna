export const name="flag-banner-fold";
export const id="dl_47e4264ca9cc4d46a9fb";
export const url=new URL("../icons/flag-banner-fold.svg?v=1bcaa8278a87edda9a762b9e697facffb51285a2d088ef349026155c4936f863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
