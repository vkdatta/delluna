export const name="handheld_controller-fill";
export const id="dl_a466be360ead45719e4f";
export const url=new URL("../icons/H/handheld_controller-fill.svg?v=4df263fdccb5c569f39613e9eed87a093f62c3dea9c537de18f636275a9036c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
