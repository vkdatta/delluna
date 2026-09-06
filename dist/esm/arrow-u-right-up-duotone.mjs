export const name="arrow-u-right-up-duotone";
export const id="dl_d77d1a4eaa664923980e";
export const url=new URL("../icons/arrow-u-right-up-duotone.svg?v=b0caadea38e341bb57fb2805898d4de1e40042565cb3e6192358200257e0ef66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
