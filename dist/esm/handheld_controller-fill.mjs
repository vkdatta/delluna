export const name="handheld_controller-fill";
export const id="dl_2c41b486931447feb3de";
export const url=new URL("../icons/handheld_controller-fill.svg?v=2db978730c08ee84e1381b6b66de5d1d9667553fe2dc2e00d826b8ee589c9259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
