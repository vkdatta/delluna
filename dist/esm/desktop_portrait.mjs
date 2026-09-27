export const name="desktop_portrait";
export const id="dl_516310ea5bd4143e4c5f";
export const url=new URL("../icons/desktop_portrait.svg?v=8c9bc2d3412288c6900f5e22f752071ca9acab0c142e870c5faeafe7976265cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
