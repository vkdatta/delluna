export const name="date_range";
export const id="dl_2e9aeb4a770e2b8f0ca3";
export const url=new URL("../icons/date_range.svg?v=6512b26090f6bc82665f534483afe7ae1fac09538a2d7dcd52db3cafa4f52f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
