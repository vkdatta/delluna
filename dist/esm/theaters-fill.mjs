export const name="theaters-fill";
export const id="dl_460455a4bf964f129784";
export const url=new URL("../icons/theaters-fill.svg?v=4c1f323cc28ea8b85c6afc1fdd7006811baa5f394feedd8500f9d47f73b4a85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
