export const name="lucid_1-building";
export const id="dl_fea373519e484f0ca496";
export const url=new URL("../icons/lucid_1-building.svg?v=9132f5c5e9d163d5774f434c757723f5791f5571fc87ef1175eff7fdaaf60b00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
