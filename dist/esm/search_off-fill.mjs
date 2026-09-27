export const name="search_off-fill";
export const id="dl_e9dfb78ea9026a442512";
export const url=new URL("../icons/search_off-fill.svg?v=4ded82bed1c8d4c2514536c9ece907ecd129c783494a5bdafc067b3669517ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
