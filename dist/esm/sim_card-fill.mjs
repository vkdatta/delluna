export const name="sim_card-fill";
export const id="dl_4ae98c51221da23b6e5e";
export const url=new URL("../icons/sim_card-fill.svg?v=c14a3b88e118cb872ae8eb67a53d7b9ef002a033b6fbefd1c041116414ec4f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
