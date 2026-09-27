export const name="drop-half";
export const id="dl_88372fb2316d44b0b7d3";
export const url=new URL("../icons/drop-half.svg?v=f61f8da063651c04a1ea1a5adf5e364b4b31ce004db35b9e220a61adf7f243b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
