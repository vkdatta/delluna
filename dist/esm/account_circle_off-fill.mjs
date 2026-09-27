export const name="account_circle_off-fill";
export const id="dl_26578523a1f7eadc4869";
export const url=new URL("../icons/account_circle_off-fill.svg?v=ad845e06c05b47cc1b695d456c490e474f53d59bc3bd2d4e6d328d2a3c5b4c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
