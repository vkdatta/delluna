export const name="gif_2-fill";
export const id="dl_b345250ed4f5cb0633a4";
export const url=new URL("../icons/gif_2-fill.svg?v=d7c8eb6a43e9958a9d446d442d057db9076e990fa5395a8a7cc4dfaaa5c5120f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
