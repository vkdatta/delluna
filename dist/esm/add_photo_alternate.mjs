export const name="add_photo_alternate";
export const id="dl_bb86ea4440284fa280fd";
export const url=new URL("../icons/add_photo_alternate.svg?v=39777756f697d42f88b8e49c31fa80f44fc92e811eaa3d005f6a5f077bdaaf31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
