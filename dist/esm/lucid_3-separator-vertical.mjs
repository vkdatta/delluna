export const name="lucid_3-separator-vertical";
export const id="dl_4c51270fc801484f8702";
export const url=new URL("../icons/lucid_3-separator-vertical.svg?v=a021cc5cb4baad26a8528959771cb945cd05aac66d66c6bfc6b6c746eae2fbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
