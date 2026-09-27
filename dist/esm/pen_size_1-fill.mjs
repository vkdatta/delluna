export const name="pen_size_1-fill";
export const id="dl_f8998aaf308cce544131";
export const url=new URL("../icons/pen_size_1-fill.svg?v=84c14975e28b2482ca299f193eea84763afca73caa182022107ef6ff6959c649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
