export const name="lucid_2-folders";
export const id="dl_0dfe9fac3c3f42218007";
export const url=new URL("../icons/lucid_2-folders.svg?v=cd841c81e1e6e50d6f1427d3c5736c05442087ff6f2f3bdc9951c2edfef8774e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
