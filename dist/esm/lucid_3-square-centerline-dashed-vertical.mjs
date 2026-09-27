export const name="lucid_3-square-centerline-dashed-vertical";
export const id="dl_eece36c07d2048a0a62e";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-vertical.svg?v=4f279d9a74f56d7d7d1f8aab84c1530facb26ea419cbf20cb2e4144cdc3c3c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
