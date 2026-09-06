export const name="door-duotone";
export const id="dl_f300950a293741ee8799";
export const url=new URL("../icons/door-duotone.svg?v=b1ccbfba4fb9ec700168393ce64e205d7ca42ba75bf9696b0e0ffc7530caf123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
