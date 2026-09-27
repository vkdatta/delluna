export const name="tag";
export const id="dl_22c5d43ef23249698bd2";
export const url=new URL("../icons/tag.svg?v=21d6acb244f3ea70b548a0c9a55cf9c3d15794e7789db09769dcb492d2bb9bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
