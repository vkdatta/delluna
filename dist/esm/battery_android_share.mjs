export const name="battery_android_share";
export const id="dl_5bb02e291e3b4083a95f";
export const url=new URL("../icons/battery_android_share.svg?v=96540dbf65cbe8a91d017a7fd27b8f3c752a4ef27b961f5f98940d3fd1af4a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
