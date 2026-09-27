export const name="person-simple-hike-duotone";
export const id="dl_79c6171e30fe4128ae5a";
export const url=new URL("../icons/person-simple-hike-duotone.svg?v=dc84003fb015597432de1ed3cee7b0ea3ba052ff678e81673319ff866fda21c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
