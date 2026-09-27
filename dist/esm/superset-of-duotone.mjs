export const name="superset-of-duotone";
export const id="dl_7c856e05fc9b7e4bd853";
export const url=new URL("../icons/superset-of-duotone.svg?v=17cea05a253625fc23ff7bf57aae9f5123d51bc1ca1498cdb801588b39e53c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
