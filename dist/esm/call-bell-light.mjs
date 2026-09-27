export const name="call-bell-light";
export const id="dl_2d95b98b8295480a83bd";
export const url=new URL("../icons/call-bell-light.svg?v=1196e97a3ad30d4712b41bf27167921e64b299e15adfc7952a4947fcc4a2bd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
