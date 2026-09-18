export const name="star_rate_half-fill";
export const id="dl_e4afb3a64a9b4fb5a1df";
export const url=new URL("../icons/star_rate_half-fill.svg?v=558133295808e66d22be0d9029b45feb190908bfd5bc97cb50a89e4db6c46d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
