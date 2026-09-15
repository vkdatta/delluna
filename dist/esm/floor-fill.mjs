export const name="floor-fill";
export const id="dl_06b2f0f756e54998a639";
export const url=new URL("../icons/F/floor-fill.svg?v=abc21a87670cd148ddcb1df0ca0f5d01f76290cc13c9961b6dbcdb07ed3eeaea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
