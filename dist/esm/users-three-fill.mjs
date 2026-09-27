export const name="users-three-fill";
export const id="dl_428712e1f4c1141b86cc";
export const url=new URL("../icons/users-three-fill.svg?v=0c7ebcdf3b2fba9313c5d9ba692a8274587c5874f466a1102f53e5f8ca0f8f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
