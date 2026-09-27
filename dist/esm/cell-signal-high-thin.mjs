export const name="cell-signal-high-thin";
export const id="dl_dace31e0371344bfade9";
export const url=new URL("../icons/cell-signal-high-thin.svg?v=13500a9e48aea1abfbc03749e0cba1b937c3833929dce4241a7ecbc7644255f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
