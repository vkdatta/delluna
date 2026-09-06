export const name="laptop-bold";
export const id="dl_a06b8cd90c7a4a8f838f";
export const url=new URL("../icons/laptop-bold.svg?v=0f43016bc681ecea60a3db300f003d24cefb5f67b743a34a47cf9a2190e0e7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
