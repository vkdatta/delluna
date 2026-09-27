export const name="sanitizer-fill";
export const id="dl_d21af45411b49fd7cf45";
export const url=new URL("../icons/sanitizer-fill.svg?v=9f508c07178d3cba0d163b1df232b90d9c5123b9018022a71da0d08e35ea1868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
