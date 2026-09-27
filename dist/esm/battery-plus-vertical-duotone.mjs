export const name="battery-plus-vertical-duotone";
export const id="dl_72a29c5ac40d4285ac40";
export const url=new URL("../icons/battery-plus-vertical-duotone.svg?v=811f6c62a3bec5448671bbccbf5777cf1f8fb92ab5edaa1ff40144faeea7d6aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
