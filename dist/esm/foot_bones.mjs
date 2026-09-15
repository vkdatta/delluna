export const name="foot_bones";
export const id="dl_c3b3f95723b64e4d9127";
export const url=new URL("../icons/F/foot_bones.svg?v=dc47710cb337b61cc5c69dacff5375afc276471f4eece4c2a928727d0c5c5b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
