export const name="cursor-text-fill";
export const id="dl_34b946dd80404a44bd52";
export const url=new URL("../icons/cursor-text-fill.svg?v=7b1726ce5dd5f3f20046385eb228488d4102b86dcfa36d945f5904f728dfb3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
