export const name="humerus-fill";
export const id="dl_819f8d694e3d3160ac95";
export const url=new URL("../icons/humerus-fill.svg?v=b0566516a5b020a2463dd34f71e8526020721a0ff4792a74f54804b487bc0576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
