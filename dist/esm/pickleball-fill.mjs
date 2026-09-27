export const name="pickleball-fill";
export const id="dl_e5a45477d29e78b7ce04";
export const url=new URL("../icons/pickleball-fill.svg?v=aad0d3a0fbd3b3efa6579890fd7d2e1e3b1ce1065821d7475767b9c1da9dea45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
