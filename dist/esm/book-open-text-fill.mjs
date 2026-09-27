export const name="book-open-text-fill";
export const id="dl_e990f4cb82fc416285b6";
export const url=new URL("../icons/book-open-text-fill.svg?v=9f52b4914b0a64020e747ff538bfc989fb0022092c9df892404a40f7775fd6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
