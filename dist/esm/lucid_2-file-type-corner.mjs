export const name="lucid_2-file-type-corner";
export const id="dl_a8df6f0219fe4f6f85c6";
export const url=new URL("../icons/lucid_2-file-type-corner.svg?v=6e8ddae7013e0207eb28bd9c9275348cbf66d27bc88ec06b23bb0778c029be45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
