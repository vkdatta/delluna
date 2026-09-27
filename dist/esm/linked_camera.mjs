export const name="linked_camera";
export const id="dl_8a6a9ed67e014c427cb7";
export const url=new URL("../icons/linked_camera.svg?v=d971a2839426c0de95ceed3fa92523f8377fcc2e5d0927aa2d8fc6de14aef465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
