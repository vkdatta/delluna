export const name="exclude-fill";
export const id="dl_4ed7a21c605f4fdb837f";
export const url=new URL("../icons/exclude-fill.svg?v=1ce1a2e31468b19833abc17723cdcfd7fa0a4741765c904eb4dfc0e9bc02e915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
