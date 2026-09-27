export const name="meeting_room-fill";
export const id="dl_2a0bf3d6a27614b6a1ff";
export const url=new URL("../icons/meeting_room-fill.svg?v=fdcaf16328108abe1cbbf610e5943a834bd52346349fc77d97df34369d4dc684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
