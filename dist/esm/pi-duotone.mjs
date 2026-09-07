export const name="pi-duotone";
export const id="dl_d5545ae2ca0948df92f7";
export const url=new URL("../icons/pi-duotone.svg?v=bc2a3ced8b8b86204857799506a9cd1235bc0766574b2dd4769a7e6845f89c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
