export const name="devices_off-fill";
export const id="dl_067e1e0a09c4418a8897";
export const url=new URL("../icons/devices_off-fill.svg?v=02f747d02cd0c994e84e866e2bd7f533a329a28d8619ec2fa2edf019ee4e98fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
