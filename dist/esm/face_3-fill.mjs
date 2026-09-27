export const name="face_3-fill";
export const id="dl_2cc0e0ac262cd60af54a";
export const url=new URL("../icons/face_3-fill.svg?v=12117b8aad2cdd47c0cbcf72fae34f73558decdaa839cc76451ef0f293afcdb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
