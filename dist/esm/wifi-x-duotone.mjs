export const name="wifi-x-duotone";
export const id="dl_a35fb50c10751ce9cd75";
export const url=new URL("../icons/wifi-x-duotone.svg?v=26bf264f7a17f72a0e12096ae616284b525313bbd18ac65520b6cd06f580e17b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
