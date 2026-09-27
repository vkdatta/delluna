export const name="water-fill";
export const id="dl_5e5ef14f6ee2c4990928";
export const url=new URL("../icons/water-fill.svg?v=860b08251bf604b13006eab9fb12a1487ec39da93cf550825e68c290fe267413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
