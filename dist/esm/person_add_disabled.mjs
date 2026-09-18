export const name="person_add_disabled";
export const id="dl_2c9b8a060d5048a4bfd4";
export const url=new URL("../icons/P/person_add_disabled.svg?v=fe3c5636723c8aff720c04a1c822ed5d106d3f08a26024bf76cff2dbc3e8cc52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
