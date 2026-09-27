export const name="cell-signal-high-thin";
export const id="dl_dace31e0371344bfade9";
export const url=new URL("../icons/cell-signal-high-thin.svg?v=f80ab9e291cb3d79ee0047d4595f3e8e286ee9d501974531d949a665cca0de7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
