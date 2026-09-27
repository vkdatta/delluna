export const name="moving_ministry-fill";
export const id="dl_7feef0781e18b31af4c4";
export const url=new URL("../icons/moving_ministry-fill.svg?v=d04a0e86525bf85bb0e9807d20d08c04cd1521193b10af1281c123a38912748d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
