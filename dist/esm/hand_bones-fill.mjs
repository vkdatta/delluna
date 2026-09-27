export const name="hand_bones-fill";
export const id="dl_de067e431f0e35fc0ea8";
export const url=new URL("../icons/hand_bones-fill.svg?v=29d6b48e40f732897e3834b358606b1e7e661d74f02fbe174832c891151fb4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
