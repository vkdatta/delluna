export const name="photo_size_select_large";
export const id="dl_a1ba346dc658a3b34fe5";
export const url=new URL("../icons/photo_size_select_large.svg?v=b1226bb124c8a6af80098e3ee525421e75c26788c18124149093d6b0397566b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
