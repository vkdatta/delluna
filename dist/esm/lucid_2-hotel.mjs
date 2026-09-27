export const name="lucid_2-hotel";
export const id="dl_685e53f2b32144a2a77f";
export const url=new URL("../icons/lucid_2-hotel.svg?v=82872e4c3d2ededc59aa04d091708d6fa1530304ef4138c572e170562928485c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
