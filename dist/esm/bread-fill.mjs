export const name="bread-fill";
export const id="dl_ec64ecb7e50c406db79f";
export const url=new URL("../icons/bread-fill.svg?v=014b859c6fdfcda87b1db0646439d12f34332cbebcf760bd52bf14e8029b0268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
