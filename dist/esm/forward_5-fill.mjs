export const name="forward_5-fill";
export const id="dl_7a2db699a0a2b28f9322";
export const url=new URL("../icons/forward_5-fill.svg?v=79d24ba90523fe0ff3c3234f56c05cb10d215a4e8ff03ab43152a0d07f6bb0d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
