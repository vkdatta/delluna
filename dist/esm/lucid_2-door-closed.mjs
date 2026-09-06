export const name="lucid_2-door-closed";
export const id="dl_d84f441a5ac247228dcb";
export const url=new URL("../icons/lucid_2-door-closed.svg?v=60fe4b3c2816e8be4808affddaef64170de604955e592ddc496f411f0d40d5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
