export const name="rss";
export const id="dl_4b495c683c244b9bafc2";
export const url=new URL("../icons/rss.svg?v=736623c8851a039b38c85f892d80780c389f2e6f7521d43224788dfd059b8efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
