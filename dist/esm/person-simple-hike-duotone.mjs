export const name="person-simple-hike-duotone";
export const id="dl_79c6171e30fe4128ae5a";
export const url=new URL("../icons/person-simple-hike-duotone.svg?v=b1f354df6bdc41533b052ab329dd128c789b366a8a3f621a1e8c3f40d5581e42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
