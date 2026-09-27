export const name="nest_farsight_seasonal";
export const id="dl_5cd1e958d1c9bc0639db";
export const url=new URL("../icons/nest_farsight_seasonal.svg?v=6760efe0215a11176c48111b8fe2464ccd5ded3c334d48aa7583c3ddc71e8ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
