export const name="tools_level-fill";
export const id="dl_e1a7e3c797014a408571";
export const url=new URL("../icons/tools_level-fill.svg?v=136e30b614e7215dc6bb2aafee5ae21c2a7c6b3fb5955ba02be47c86a147b5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
