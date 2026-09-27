export const name="hand-coins-fill";
export const id="dl_2485bbf36bda409bb24c";
export const url=new URL("../icons/hand-coins-fill.svg?v=ba8d270583a338bf2c13054b8113fb9d2d70e739cbce17ae9baee7e79a3f1448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
