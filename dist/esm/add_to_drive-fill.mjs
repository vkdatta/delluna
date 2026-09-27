export const name="add_to_drive-fill";
export const id="dl_8bfb89693ae1f5ff026c";
export const url=new URL("../icons/add_to_drive-fill.svg?v=f24dc4ded6c907ceae05bd476e2b3be82e778f07aae97a9e016eebbb320754d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
