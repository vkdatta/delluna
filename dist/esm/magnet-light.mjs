export const name="magnet-light";
export const id="dl_dc731feb497941daa471";
export const url=new URL("../icons/magnet-light.svg?v=89619799d5b71dba2a58fb4fa7c88465984ffba4417a18a901a48779b949c1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
