export const name="battery-warning-vertical-thin";
export const id="dl_5c85270affd4464fb21a";
export const url=new URL("../icons/battery-warning-vertical-thin.svg?v=8f6b720c04135926b8c2d17571ffd0668cb5d7298ed3476ebeafcbf0eb0a5db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
