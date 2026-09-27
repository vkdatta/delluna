export const name="nest_wifi_pro";
export const id="dl_25870ca3ced4d01693ac";
export const url=new URL("../icons/nest_wifi_pro.svg?v=2c308f882a6b76ccf888116c22d577f561f080fba0fb123132d3403d86805da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
