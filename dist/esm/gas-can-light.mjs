export const name="gas-can-light";
export const id="dl_dd2b5733734d4e16a3bb";
export const url=new URL("../icons/gas-can-light.svg?v=1217b192772c7eb36c344eb7a6248f41cf263100a85fd01fa2bea55bec8d39a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
