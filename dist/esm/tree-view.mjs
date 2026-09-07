export const name="tree-view";
export const id="dl_87775af8d2284fd2ad80";
export const url=new URL("../icons/T/tree-view.svg?v=9194545aba68a72264379c280be1b96e75ac9fc7d21a6c47fa29cc8c85f78290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
