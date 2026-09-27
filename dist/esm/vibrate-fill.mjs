export const name="vibrate-fill";
export const id="dl_6f32879c834af599fe0e";
export const url=new URL("../icons/vibrate-fill.svg?v=bd9475a96896b1847592662dcab642c432456d0efb328b566d22f3fcbe5e490c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
