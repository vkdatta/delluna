export const name="6k_plus-fill";
export const id="dl_34e419a07618870088b9";
export const url=new URL("../icons/6k_plus-fill.svg?v=48834f9cd90fec2a411736f66480eeb8dc29ccec42dccf59bf3dc51130b047a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
