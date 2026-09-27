export const name="ent-fill";
export const id="dl_c23438cd736bfd535bbd";
export const url=new URL("../icons/ent-fill.svg?v=2d163eedcbe7b73944c5b6d5223d6091c6ea6e42e07e9da765764517d6286778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
