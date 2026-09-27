export const name="multiple_airports-fill";
export const id="dl_01ea58b0ea3dbe30cef4";
export const url=new URL("../icons/multiple_airports-fill.svg?v=aa184ff932fb6ee1516ac1af253d032abaab15892290b428f2cfcde115a07420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
