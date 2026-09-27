export const name="rows-fill";
export const id="dl_946d89a25100484bb448";
export const url=new URL("../icons/rows-fill.svg?v=b67108011f7dd24f8a8f79460bb3ad24692753e0277b8b3953e37fae8409bec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
