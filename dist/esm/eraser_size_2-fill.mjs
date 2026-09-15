export const name="eraser_size_2-fill";
export const id="dl_f11a0e5632884381819a";
export const url=new URL("../icons/E/eraser_size_2-fill.svg?v=afb0405d3c65db0fdcbe68181ec179d4f4d8a0c24869ce31b7f55384d5aacc18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
