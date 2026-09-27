export const name="rewind-circle-duotone";
export const id="dl_23c87f82b62f4fec91d8";
export const url=new URL("../icons/rewind-circle-duotone.svg?v=f00e159ef583c572ec47f3e58791aaeb0110cc1f777bcb668a893e27d4a106ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
