export const name="familiar_face_and_zone-fill";
export const id="dl_627bc8114c201171ff3a";
export const url=new URL("../icons/familiar_face_and_zone-fill.svg?v=3d41dfd82149b4edb0290d938fb5810fedbdb7025ad9e00c9b3941276fde518a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
