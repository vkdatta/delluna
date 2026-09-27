export const name="face_left";
export const id="dl_4c8a0b3eecc7aa9270d2";
export const url=new URL("../icons/face_left.svg?v=52032ed62e5a0ae5694fbcf8dc0be01ade03baaa3e6c1bea8d57b459a399136c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
