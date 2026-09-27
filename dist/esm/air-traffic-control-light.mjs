export const name="air-traffic-control-light";
export const id="dl_8b35f7aba080454f8235";
export const url=new URL("../icons/air-traffic-control-light.svg?v=69b1e6531dd9aa5bb8bc09296a2e3a0fc9a2111b5e24b6516db673d687398ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
