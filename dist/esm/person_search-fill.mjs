export const name="person_search-fill";
export const id="dl_0867b8e302d9c9a42207";
export const url=new URL("../icons/person_search-fill.svg?v=a8dc15dc800dd4b8203fc662175435bdc6d70f697d47ab8d0f73156442179e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
