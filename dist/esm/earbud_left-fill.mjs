export const name="earbud_left-fill";
export const id="dl_8d93e2bfc069e90c9526";
export const url=new URL("../icons/earbud_left-fill.svg?v=e75e04d7c64e120b9f93dfc6599acdf5c715c4d835e04971d621e63a672adf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
