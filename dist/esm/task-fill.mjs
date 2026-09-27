export const name="task-fill";
export const id="dl_7db9927820bf9cd847d6";
export const url=new URL("../icons/task-fill.svg?v=0e7a1a71b53c4bda00f8536d3b91cbe830f8ecc5853efbae8e46081cea935101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
