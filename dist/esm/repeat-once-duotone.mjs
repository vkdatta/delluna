export const name="repeat-once-duotone";
export const id="dl_fc72e8cc258140268b03";
export const url=new URL("../icons/repeat-once-duotone.svg?v=ee45aa81072b86e571f657ce7c78f3d35d403d377c27fa9883885d1fc6bf2371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
