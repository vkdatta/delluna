export const name="star_border";
export const id="dl_a2e368921f40c20b11cf";
export const url=new URL("../icons/star_border.svg?v=f64e35041635a7d769b0e3f27682aa75eb8411f8c0dbf184e06ebe47489ef7cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
