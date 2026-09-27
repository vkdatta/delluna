export const name="file-svg-duotone";
export const id="dl_9cdc51a319ec4a85a032";
export const url=new URL("../icons/file-svg-duotone.svg?v=d1ba3d8a8a0fd68cd1a00f867e55c14830c483123013efc55d5d7583cd0e20d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
