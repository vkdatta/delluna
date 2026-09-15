export const name="camera_roll-fill";
export const id="dl_99782d8d672e4f949b71";
export const url=new URL("../icons/C/camera_roll-fill.svg?v=1006c821664e509c18ba331ab63265c91b8e8faa4c6c5e34295195f2ee9857b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
