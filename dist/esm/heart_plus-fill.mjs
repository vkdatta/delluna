export const name="heart_plus-fill";
export const id="dl_dbc34fe442a1c33e2702";
export const url=new URL("../icons/heart_plus-fill.svg?v=61f0227c7b830ba09057cc528e06fa9f668200d2ca44de050b946f716645dc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
