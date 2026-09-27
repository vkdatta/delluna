export const name="trophy-bold";
export const id="dl_3d1b1c50449c118528fa";
export const url=new URL("../icons/trophy-bold.svg?v=7b67f9f1c3623ef24a97f0404b3622c2356cc907a43ec5041fb2a9e695b97ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
