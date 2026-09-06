export const name="lucid_1-circle-off";
export const id="dl_1908406c18dd488686ec";
export const url=new URL("../icons/lucid_1-circle-off.svg?v=6930c496b4b8efd70030f4bc5c1304a44e85ddec1b23a5eb2aae40b14d3225dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
