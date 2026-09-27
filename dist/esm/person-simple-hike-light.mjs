export const name="person-simple-hike-light";
export const id="dl_04858c89138f4624bca8";
export const url=new URL("../icons/person-simple-hike-light.svg?v=c99878117f04767f1da94c09830d988c15e628a288f30fb32d0c3d8cc670c692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
