export const name="gps-fix-fill";
export const id="dl_4c9662df44394936ba88";
export const url=new URL("../icons/gps-fix-fill.svg?v=e8d971a13773e3861e1bc023a0d448a4d12de735377c51fe959c314b4a45c5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
