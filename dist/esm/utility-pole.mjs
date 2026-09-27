export const name="utility-pole";
export const id="dl_2a6e44436806429f9518";
export const url=new URL("../icons/utility-pole.svg?v=033e0166bf283e4ab5dbaf582f48ce1d6990abd3e963adf3690c61af2b1a332e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
