export const name="folder-user-light";
export const id="dl_3d72efae8bdd47a8a824";
export const url=new URL("../icons/folder-user-light.svg?v=3b79a2d0f754809cd1566f6a6cdbdddfa5c3ad58040c666b911049ae1312c531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
