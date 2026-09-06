export const name="lucid_1-boom-box";
export const id="dl_b76318ff36414d7a8d3b";
export const url=new URL("../icons/lucid_1-boom-box.svg?v=ed781f6440bec9549d3bf782895de48bb49f2c4883e420422393b6111b25a275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
