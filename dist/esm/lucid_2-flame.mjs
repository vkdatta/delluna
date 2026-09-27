export const name="lucid_2-flame";
export const id="dl_c365ddb61260427a8766";
export const url=new URL("../icons/lucid_2-flame.svg?v=1cd30ab766fe93957d4bb08726fec1d8f7024b1d586b1e727c50cb5000274b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
