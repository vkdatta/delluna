export const name="battery-warning-duotone";
export const id="dl_97344ba70021446f85df";
export const url=new URL("../icons/battery-warning-duotone.svg?v=e95d7a9c77eb2ccd12fdf7c5f29c64a9e072fc48b27b2cdc090ddc607e9cdce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
