export const name="image_inset-fill";
export const id="dl_23821119cd6f453cbafc";
export const url=new URL("../icons/image_inset-fill.svg?v=cfde797deadf5aa240d3e1292b76e8a027d31bd2a3513bcd7b8178d2214235b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
