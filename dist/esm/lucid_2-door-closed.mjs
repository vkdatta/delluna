export const name="lucid_2-door-closed";
export const id="dl_d84f441a5ac247228dcb";
export const url=new URL("../icons/lucid_2-door-closed.svg?v=1916342c86498f471f66bcf8b2072081a5d890c786b1c6eeb63227d3bbe15df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
