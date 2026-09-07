export const name="thermometer-snowflake";
export const id="dl_e445b60371df43fead84";
export const url=new URL("../icons/thermometer-snowflake.svg?v=96358c1363fffa9cad2222d5b4e6b79bcde0ad910af2d88da2d991c0910b9fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
