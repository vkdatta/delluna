export const name="coffee-fill";
export const id="dl_075dfeeebe5541c792d2";
export const url=new URL("../icons/coffee-fill.svg?v=3800cb5df43b1b2cec55e080859a003f926de34087c030613bfc6b0140dd0a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
