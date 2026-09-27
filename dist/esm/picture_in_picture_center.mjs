export const name="picture_in_picture_center";
export const id="dl_5d36b2d452d160283345";
export const url=new URL("../icons/picture_in_picture_center.svg?v=6a0bb48df938505178036c182495c072d9d44ffd23b581ad2b133357d05c1a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
