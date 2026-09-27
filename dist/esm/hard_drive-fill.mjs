export const name="hard_drive-fill";
export const id="dl_0271a6fdcebd3971771f";
export const url=new URL("../icons/hard_drive-fill.svg?v=00591de274f952620a9bc8446ad4271f340e78d3d5cfc0b472815686d3cc9915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
