export const name="cognition-fill";
export const id="dl_6c2d9cae837d59cab80b";
export const url=new URL("../icons/cognition-fill.svg?v=30c821d40cbbe5862500058798302ad6d6b0f89e18d2ddd9d252ed3fdcb3ddec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
