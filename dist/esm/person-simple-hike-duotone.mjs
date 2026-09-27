export const name="person-simple-hike-duotone";
export const id="dl_79c6171e30fe4128ae5a";
export const url=new URL("../icons/person-simple-hike-duotone.svg?v=3c9cae382da91d37a779e516194d2252d3e98473971919ac89613825abcc4fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
