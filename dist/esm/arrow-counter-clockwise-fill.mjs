export const name="arrow-counter-clockwise-fill";
export const id="dl_81fc4856073e4feb89b0";
export const url=new URL("../icons/arrow-counter-clockwise-fill.svg?v=2721f11651b70d398404cf3c6f381dee94a05caccb3add216f74d6a6ab93ea52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
