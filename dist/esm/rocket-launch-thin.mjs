export const name="rocket-launch-thin";
export const id="dl_8f2432546f11443fbdeb";
export const url=new URL("../icons/rocket-launch-thin.svg?v=de77c003e76a8422ee5ceb7e5421c1355145bb9b7f3adbafa36304ed1020d595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
