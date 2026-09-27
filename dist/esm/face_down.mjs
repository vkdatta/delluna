export const name="face_down";
export const id="dl_3f9b3c993e86ee6bc712";
export const url=new URL("../icons/face_down.svg?v=003ed9edf57a9f11aba7947b381a5f44444fe727728ac94293565dea51073c2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
