export const name="user-circle-check-light";
export const id="dl_bceffe0c0a804720b919";
export const url=new URL("../icons/U/user-circle-check-light.svg?v=84ea4f7b43b9011fc2b12e16b6b443c935a143c45895d2df0574af6f92888d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
