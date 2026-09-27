export const name="back_hand-fill";
export const id="dl_b1b05cec93c2fecea042";
export const url=new URL("../icons/back_hand-fill.svg?v=a510776dcd3852baa2913700b9a8fef161b158d3b4cf52ad9154d002be285a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
