export const name="battery-warning-vertical-thin";
export const id="dl_5c85270affd4464fb21a";
export const url=new URL("../icons/battery-warning-vertical-thin.svg?v=3d1767537740e98dff7d7ed282d92eb39783b9ccc65173f4c43d4cb45812966d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
