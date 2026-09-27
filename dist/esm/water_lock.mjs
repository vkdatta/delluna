export const name="water_lock";
export const id="dl_6c8d4d11016aa8994c43";
export const url=new URL("../icons/water_lock.svg?v=9b4c3b5175f791d9bc4980969807eec78449c052ea9f50151e4851b0f8e01347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
