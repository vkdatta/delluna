export const name="tree-view-duotone";
export const id="dl_f0fedde15f70472e880e";
export const url=new URL("../icons/tree-view-duotone.svg?v=01e775af14d9d5b4ab6feeed8c9a915d73bc5de3f57b114cd52f17a073a3b695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
