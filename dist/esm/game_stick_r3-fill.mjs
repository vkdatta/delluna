export const name="game_stick_r3-fill";
export const id="dl_29c18aac52fd7a8b76f6";
export const url=new URL("../icons/game_stick_r3-fill.svg?v=50130ef4de7181893436b6eb7c2a1415a628f5dda6248dc1ea3be575ee7c2f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
