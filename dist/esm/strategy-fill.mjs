export const name="strategy-fill";
export const id="dl_727dbe6f58c9ea6a76b1";
export const url=new URL("../icons/strategy-fill.svg?v=ca9b3b90c4f2d6e50fe5e7327e59b4bdcf44865b0e9abbbd1baa8ede37f16da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
