export const name="subway-fill";
export const id="dl_493549cef6b179f7fa56";
export const url=new URL("../icons/subway-fill.svg?v=21119d76a8d0d35d79044727b8823455337a1fa65fb14f5e0bb894035a608672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
