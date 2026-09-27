export const name="50mp";
export const id="dl_fb083f15ce514b7bbd2f";
export const url=new URL("../icons/50mp.svg?v=087e4702da8da39a82728137335cc9968882670db20be109375950b9d997087c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
