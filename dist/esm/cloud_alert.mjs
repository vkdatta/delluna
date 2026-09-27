export const name="cloud_alert";
export const id="dl_e35e22e95eff5a5ec2c0";
export const url=new URL("../icons/cloud_alert.svg?v=33211377c7a49ee4479d3bf51bfe5cc1725252947763de569e8ec1e39ad30a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
