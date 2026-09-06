export const name="lucid_1-badge-russian-ruble";
export const id="dl_ad021f9314ed4189b150";
export const url=new URL("../icons/lucid_1-badge-russian-ruble.svg?v=41c85f63a32588638a2325f4f09e76d23f1f84e2d0a74454d3841c26d1246383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
