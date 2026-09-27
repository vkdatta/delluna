export const name="skillet";
export const id="dl_ea6ab4db8e74fec2573e";
export const url=new URL("../icons/skillet.svg?v=cefbfa3fdcc485a271fa273b27b4c1cb00e19d86eda5efd2ecd2040772406e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
