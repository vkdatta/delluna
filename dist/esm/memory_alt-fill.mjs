export const name="memory_alt-fill";
export const id="dl_b9b7f4997fbc44e2e3c7";
export const url=new URL("../icons/memory_alt-fill.svg?v=0f0a182c80d2803a14d3788f9d9d2287f5b6fd03c7c30ed002e670aefbddbf8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
