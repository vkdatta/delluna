export const name="charger-fill";
export const id="dl_297d5823187e4cc58655";
export const url=new URL("../icons/C/charger-fill.svg?v=678ca91a0829b74ea3a0b25f8de58f5afed9231a382ce9a65ec9839d887eb002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
