export const name="local_fire_department";
export const id="dl_1ed89e4f0c69a151c9e8";
export const url=new URL("../icons/local_fire_department.svg?v=35bbd64b3241ae04aea64911a5fed1e31236d61ae1b5dbcca90a38aee3502963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
