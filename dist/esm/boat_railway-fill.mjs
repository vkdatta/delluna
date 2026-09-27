export const name="boat_railway-fill";
export const id="dl_eeb741082e8cd9af5675";
export const url=new URL("../icons/boat_railway-fill.svg?v=1137fae8937de97999e350eb4f4cd88897e248154e24f07ed79222326173de16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
