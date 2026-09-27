export const name="open_in_new_off-fill";
export const id="dl_a020344618cdafbb14d2";
export const url=new URL("../icons/open_in_new_off-fill.svg?v=5c06c49746cddfc0f5fe8fdf0bc68a2c8a1d2d82cda42225874ae82ca1b8e72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
