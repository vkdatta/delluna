export const name="lucid_1-book-down";
export const id="dl_3d11390ebfcb49af8079";
export const url=new URL("../icons/lucid_1-book-down.svg?v=159f43b1ef5987b81e7d3f6918693a61fd378e8fef35964853c677799b0df0d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
