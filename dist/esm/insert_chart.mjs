export const name="insert_chart";
export const id="dl_90211da64f3aeea9a6e8";
export const url=new URL("../icons/insert_chart.svg?v=5cc280ff6ac4d9ef5712b7704d488467a1653283ade3f65557b6ec820e3c161c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
