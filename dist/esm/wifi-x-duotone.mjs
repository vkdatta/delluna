export const name="wifi-x-duotone";
export const id="dl_185645002b854fa6bf9f";
export const url=new URL("../icons/W/wifi-x-duotone.svg?v=a16c701a50f310fbe0dbbbfcd343b681329f393aba60418b4dd13678e152e242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
