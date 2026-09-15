export const name="convert_to_text";
export const id="dl_01a603003d03410684a5";
export const url=new URL("../icons/C/convert_to_text.svg?v=db0100ae8ac6aaf4cc41eb5a14389101cfaabd18f9e73d9e47bf959ff54d5324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
