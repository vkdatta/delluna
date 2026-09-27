export const name="explosion";
export const id="dl_0eb0da996022a923281a";
export const url=new URL("../icons/explosion.svg?v=21e7157ae36b79c96b960ab280a3bff5d9a47d34814ed5ecd1641b1b9f4fb91b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
