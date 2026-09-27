export const name="worm";
export const id="dl_875390c23a7046319c2d";
export const url=new URL("../icons/worm.svg?v=9297d803a79703ed93764b683cf17ad692e28ec6fc39d45d4bb23189d3b16a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
