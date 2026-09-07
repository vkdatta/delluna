export const name="spade-bold";
export const id="dl_c61d4de952bd489da2e9";
export const url=new URL("../icons/S/spade-bold.svg?v=feabe10332042fdc1320679e4847e306a38b52038691c6fab5967ff255f4ff2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
