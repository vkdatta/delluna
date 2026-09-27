export const name="game_button_l-fill";
export const id="dl_ec86b43591a093fad8a6";
export const url=new URL("../icons/game_button_l-fill.svg?v=1dd0f9a3658f9f7f9c4a517e0bf127ed70567d95337edfe0af985f43e33e1d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
