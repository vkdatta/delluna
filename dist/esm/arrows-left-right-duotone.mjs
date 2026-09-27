export const name="arrows-left-right-duotone";
export const id="dl_80dcd22ccb0a4081832c";
export const url=new URL("../icons/arrows-left-right-duotone.svg?v=e20a16a01ff7c28ae46ddc1b7b6cfe963424a5b784700c662544b4153ebadc3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
