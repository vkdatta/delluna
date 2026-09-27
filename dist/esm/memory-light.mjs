export const name="memory-light";
export const id="dl_10936428b5104dff84bc";
export const url=new URL("../icons/memory-light.svg?v=8bb83158736f8293e0f40dd3fa96f3a025a5b400065b5dcb20b3c404a3390ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
