export const name="file_save";
export const id="dl_d265b4e5fee25c01d3e5";
export const url=new URL("../icons/file_save.svg?v=7c66138d1156909ba3b23a4f2ea2ad411ea317f886cc7793cff60827004723e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
