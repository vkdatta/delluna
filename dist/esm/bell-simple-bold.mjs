export const name="bell-simple-bold";
export const id="dl_9c847f81d6374a87acb3";
export const url=new URL("../icons/bell-simple-bold.svg?v=3d2fe3bd2df6e45e60372b96b8dff2191afadfb879b4304848a26096e83c277e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
