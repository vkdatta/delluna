export const name="person_heart-fill";
export const id="dl_756a9a7740d795e026b6";
export const url=new URL("../icons/person_heart-fill.svg?v=c201de8f7c7e792d35a71b0ed3877a65ed43cde168b43e6d23e1ed16121474dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
