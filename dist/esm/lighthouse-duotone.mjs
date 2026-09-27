export const name="lighthouse-duotone";
export const id="dl_c2f1fa9d64b540ed9e16";
export const url=new URL("../icons/lighthouse-duotone.svg?v=8c432d4e876d2f532cef54c9b0168b369871fcb8caf7f64a65538320c724404a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
