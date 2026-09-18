export const name="cloud_alert";
export const id="dl_bd7008099475484d8cc8";
export const url=new URL("../icons/cloud_alert.svg?v=33211377c7a49ee4479d3bf51bfe5cc1725252947763de569e8ec1e39ad30a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
