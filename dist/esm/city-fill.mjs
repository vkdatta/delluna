export const name="city-fill";
export const id="dl_82e437fe2bc049c1a4f0";
export const url=new URL("../icons/city-fill.svg?v=cc3103e03a8332f1a00f2bcba7981ce90c4524be889f5956b92e6eaa4b9584c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
