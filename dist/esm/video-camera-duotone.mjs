export const name="video-camera-duotone";
export const id="dl_0d7ca2b0ed66ed57a21e";
export const url=new URL("../icons/video-camera-duotone.svg?v=97fe5886bc4770f95f117c55de94b135eab17f796d2c71338ffccac9fc5be34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
