export const name="text_compare-fill";
export const id="dl_7dbebc166fcb4453bcce";
export const url=new URL("../icons/T/text_compare-fill.svg?v=a0eb8ffd730681364600c5a0249352a8a5fb522f8d4b531a7844e679fe842235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
