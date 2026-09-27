export const name="bank-fill";
export const id="dl_405aad449f50486f8a02";
export const url=new URL("../icons/bank-fill.svg?v=19fa8437ed0d79efbf508cb4ffdeec33e8b4b7c41e05ef6cbb231cd301a8535b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
