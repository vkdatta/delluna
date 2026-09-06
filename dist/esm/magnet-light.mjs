export const name="magnet-light";
export const id="dl_dc731feb497941daa471";
export const url=new URL("../icons/magnet-light.svg?v=cf44164a6928f58b7630fe553dc11802070611853f862fb54075a9d25dc37f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
