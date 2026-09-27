export const name="lucid_1-arrow-down-0-1";
export const id="dl_597e7dea3e59497991ab";
export const url=new URL("../icons/lucid_1-arrow-down-0-1.svg?v=2d1e7e6c6bd6fc07694dd872fc86ad8c25c408ca9ae3fbb891474d298ffb8ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
