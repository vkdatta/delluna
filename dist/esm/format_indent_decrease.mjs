export const name="format_indent_decrease";
export const id="dl_3cfe251e3cd982bc2248";
export const url=new URL("../icons/format_indent_decrease.svg?v=b0463fa15023b0689e4b57003c5a0597cc3456509c621d4c12600a87d2be333f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
