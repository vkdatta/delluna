export const name="arrow-arc-left-duotone";
export const id="dl_cb904af5f28d4b2ab399";
export const url=new URL("../icons/arrow-arc-left-duotone.svg?v=d9cd426f8e33f832ed2d9b44e902d9df3aa994d6991c95532d2ea3bf1141870e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
