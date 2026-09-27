export const name="checkerboard-fill";
export const id="dl_e6ce34ea25ea46cb8ffb";
export const url=new URL("../icons/checkerboard-fill.svg?v=2344ab2543bc36e8512c365cdf9b21aebbec5f3af178c66830cc00844f21d09b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
