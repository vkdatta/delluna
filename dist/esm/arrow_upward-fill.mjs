export const name="arrow_upward-fill";
export const id="dl_f730b5b67afd4cea3b8f";
export const url=new URL("../icons/arrow_upward-fill.svg?v=43be1f49f1f69309ac3ba66c8cc39565c4d3917a14fa99515592c0b6cc6b6fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
