export const name="videocam_off-fill";
export const id="dl_c7e5d6ffabc822fb0c59";
export const url=new URL("../icons/videocam_off-fill.svg?v=49d8473ce112a43ced3e33858d3214b7d5c62e84bdaecc5f41c34243c501700a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
