export const name="dock_to_right-fill";
export const id="dl_8ee11854435aeb15684b";
export const url=new URL("../icons/dock_to_right-fill.svg?v=a14389ff0f0c74a22bf218ab6241a9e2c556ad332d8d4ff40ef9baf8c0903df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
