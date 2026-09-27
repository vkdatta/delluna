export const name="shield_person";
export const id="dl_8db8be86d4b458f0c8ea";
export const url=new URL("../icons/shield_person.svg?v=34172c60932d4a6beee5cf65e3fae064fd42be927208e92de4f271e60a2d59cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
