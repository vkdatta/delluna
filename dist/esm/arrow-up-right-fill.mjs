export const name="arrow-up-right-fill";
export const id="dl_91b803b3f7b647dfaca3";
export const url=new URL("../icons/arrow-up-right-fill.svg?v=dcddbbdbbefba746838a8d8e91010a78978b8af78bf3d1d38cf62c174c374f33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
