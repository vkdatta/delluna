export const name="open_in_new_off-fill";
export const id="dl_6f89c9e30e9279453e01";
export const url=new URL("../icons/open_in_new_off-fill.svg?v=521af7b168ec4a58b58e9122d869c73aac38bc6bc943766cd1671682f1e116b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
