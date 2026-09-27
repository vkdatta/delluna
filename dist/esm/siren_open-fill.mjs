export const name="siren_open-fill";
export const id="dl_821625927e57b9a3d09b";
export const url=new URL("../icons/siren_open-fill.svg?v=5f54fddfcf7d9a795fd36765951fdc98b1b42bd71caec98818443597ca0a680a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
