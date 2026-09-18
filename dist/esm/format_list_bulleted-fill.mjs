export const name="format_list_bulleted-fill";
export const id="dl_72bb6720b92941c0bd4e";
export const url=new URL("../icons/format_list_bulleted-fill.svg?v=26d772422afbfff49b9eac5b2026d693cba1c886ddb856125ce45e2046a0f52c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
