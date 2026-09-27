export const name="drop-half";
export const id="dl_88372fb2316d44b0b7d3";
export const url=new URL("../icons/drop-half.svg?v=53ff9d944207546a2ec17217edbcd0f2b6f419e265c816037d6df45e6196e6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
