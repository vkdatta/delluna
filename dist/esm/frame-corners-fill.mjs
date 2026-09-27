export const name="frame-corners-fill";
export const id="dl_c724beb6edb5455484e1";
export const url=new URL("../icons/frame-corners-fill.svg?v=b58b8fc68c2da05ea92bd78c5edeb2b0656ab3d5dad77eca2ee5fd6087808433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
