export const name="font_download";
export const id="dl_5ccc31d8ce723e665226";
export const url=new URL("../icons/font_download.svg?v=7a3f611ee361190f7913183600e720beac520a6d14eb073fef9935ee892db3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
