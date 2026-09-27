export const name="hand_bones";
export const id="dl_1fe4fece20ab2ce326ef";
export const url=new URL("../icons/hand_bones.svg?v=858ed518720a861199966466f8f8d700e31ac2fc71c629086b5426d68fcef830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
