export const name="font_download-fill";
export const id="dl_2217890ee664aac962d1";
export const url=new URL("../icons/font_download-fill.svg?v=5f64cf2409cdae408b5cd7462adff02471c742efb3345aa8e798018a9b6ae247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
