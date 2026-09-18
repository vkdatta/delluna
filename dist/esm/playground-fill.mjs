export const name="playground-fill";
export const id="dl_ec23118f151a4c47afc3";
export const url=new URL("../icons/P/playground-fill.svg?v=8c102c3f9bba65fd56bf16bb751c40de5ff89c504298404fa8f5ee16e42bcd1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
