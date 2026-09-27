export const name="face_6-fill";
export const id="dl_3e877027baa74de8160b";
export const url=new URL("../icons/face_6-fill.svg?v=e7b82b9b3b8e8b2dfbb5242fdc7e865c26491b75f8a2405552f46c112aa73746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
