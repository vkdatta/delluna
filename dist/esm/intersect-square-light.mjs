export const name="intersect-square-light";
export const id="dl_ebd8d23bba8d49b79127";
export const url=new URL("../icons/intersect-square-light.svg?v=dc1ca8144494ecbc39886112d27c2bc93d80f1a9a371a2844f10e303c62e284d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
