export const name="lucid_2-door-closed";
export const id="dl_d84f441a5ac247228dcb";
export const url=new URL("../icons/lucid_2-door-closed.svg?v=8ba825118aa9d89ae08ed4d6a1682fd658f94dd859d8434d5de0d3f87189f4f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
