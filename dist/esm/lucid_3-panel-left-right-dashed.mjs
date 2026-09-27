export const name="lucid_3-panel-left-right-dashed";
export const id="dl_638bab184b6847b6988e";
export const url=new URL("../icons/lucid_3-panel-left-right-dashed.svg?v=3e8762313020894c359ab7d6804512247455f9ae96e3218ef06c02773bb9aa03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
