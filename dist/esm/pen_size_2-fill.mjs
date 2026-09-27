export const name="pen_size_2-fill";
export const id="dl_e6f953d623688ba661b9";
export const url=new URL("../icons/pen_size_2-fill.svg?v=cc9c15c22d040d892baecdaef27615fd39a6e760ee2113debd72ba1d6191152e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
