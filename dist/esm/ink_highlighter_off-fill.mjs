export const name="ink_highlighter_off-fill";
export const id="dl_b2788d888b62419087f6";
export const url=new URL("../icons/ink_highlighter_off-fill.svg?v=c8c1dd91893bc578c9471ee41b132dca1aaed2b6968c8422f59494d69e5fc475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
