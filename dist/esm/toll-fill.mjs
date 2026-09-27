export const name="toll-fill";
export const id="dl_0f8cb19312274a69a337";
export const url=new URL("../icons/toll-fill.svg?v=528ae50baae04f4ff3b3c1d9d1681dc5ce54243d6b0c9239c63fa69c43c264c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
