export const name="gender-intersex";
export const id="dl_ddd43640cbf644bfa3f2";
export const url=new URL("../icons/gender-intersex.svg?v=a65dde9cf1303b789e1a2900d906639461cc1d5172ced07fac550b204203b660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
