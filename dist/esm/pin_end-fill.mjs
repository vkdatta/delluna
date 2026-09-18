export const name="pin_end-fill";
export const id="dl_197f49b424854936af2d";
export const url=new URL("../icons/P/pin_end-fill.svg?v=7ca18f49f4287c30293729bc2ca9cdcdc66cbf3c1ec3b9ed18a8941b86a5d13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
