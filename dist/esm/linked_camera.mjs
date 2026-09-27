export const name="linked_camera";
export const id="dl_35c8b814d0318a1f88b1";
export const url=new URL("../icons/linked_camera.svg?v=a1a8267026dcbdd278136a43ad31a718a20231ccbbd6eed6f2be9fa1ba015dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
