export const name="privacy-fill";
export const id="dl_4e5771cf291f9580af48";
export const url=new URL("../icons/privacy-fill.svg?v=7fa6c83c8f121b90f51adbe79cd33cd5ea9f45fed6b8ae1928fbfc0753ee4834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
