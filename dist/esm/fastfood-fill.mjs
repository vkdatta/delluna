export const name="fastfood-fill";
export const id="dl_423cab06f66d9794273c";
export const url=new URL("../icons/fastfood-fill.svg?v=f4d8238f7b53175b09860f6b09b52511ffe98598c11ae9a568b0a96098ef4aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
