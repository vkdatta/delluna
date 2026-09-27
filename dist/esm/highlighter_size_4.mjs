export const name="highlighter_size_4";
export const id="dl_eefa3adacda41b545307";
export const url=new URL("../icons/highlighter_size_4.svg?v=0cf8573179b4e8e942996a66d1a87effd0a39fac21bb93d90fb32018a40ce191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
