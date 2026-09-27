export const name="1k-fill";
export const id="dl_4704f4778200beac8529";
export const url=new URL("../icons/1k-fill.svg?v=73243e46929195ec860d9d0ec96f86844c51f3df56e534ecdb4ea31a551f83da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
