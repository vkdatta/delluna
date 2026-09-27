export const name="cpu-duotone";
export const id="dl_c687b5c7593c48e5a040";
export const url=new URL("../icons/cpu-duotone.svg?v=d6fb05ad987e71924977294cf109ef85e044119e91d72510f460cc5a70bd35cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
