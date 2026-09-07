export const name="ear-slash";
export const id="dl_fd1c031908fa404db19c";
export const url=new URL("../icons/ear-slash.svg?v=1033350caddb96f1b2c55629c51b3a779385274d0f70f70f9497d478a7b4e603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
