export const name="smoking_rooms-fill";
export const id="dl_1047d2986daba0f0212a";
export const url=new URL("../icons/smoking_rooms-fill.svg?v=e704ae98e4eea459302b78ef17fcdb553a97754e877910d40c340c63ce426bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
