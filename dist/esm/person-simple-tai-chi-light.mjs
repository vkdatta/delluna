export const name="person-simple-tai-chi-light";
export const id="dl_3a1343a127c44236a7a4";
export const url=new URL("../icons/person-simple-tai-chi-light.svg?v=ad799aeea914ce10cf3cf3fb2d992311877e87efb508528d3879539c7cb9f2fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
