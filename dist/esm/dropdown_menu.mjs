export const name="dropdown_menu";
export const id="dl_157a3552f26b44799171";
export const url=new URL("../icons/D/dropdown_menu.svg?v=097038d2cb18da1421ccb07607e48685c5083c7d07d78b4012aa70e460eb63a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
