export const name="inbox_text-fill";
export const id="dl_5a1ceaec812a40d0a908";
export const url=new URL("../icons/inbox_text-fill.svg?v=e15601014a1cde6a64b0ef882adee4cf4bdb732fba1af1151c131e0a22b4393b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
