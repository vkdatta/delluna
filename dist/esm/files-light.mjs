export const name="files-light";
export const id="dl_94167af630644f1aa89c";
export const url=new URL("../icons/files-light.svg?v=1179a32cb5c4ab54f19665b319cf70afe350eaed54fa826ae47f17c2d60609d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
