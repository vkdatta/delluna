export const name="home_repair_service-fill";
export const id="dl_bbea6dadceb529db9d34";
export const url=new URL("../icons/home_repair_service-fill.svg?v=59ef4d2044dc80fd14f748f54d75622d9d7c1e479a3c07b99fc812800686cd8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
