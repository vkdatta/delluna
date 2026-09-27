export const name="hourglass_bottom-fill";
export const id="dl_aace3e853d18dbeea43d";
export const url=new URL("../icons/hourglass_bottom-fill.svg?v=b1cdafe164b799abae538f333322da5ff35ae0b68ca9dcdc94cf9b78a520eebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
