export const name="game_button_r-fill";
export const id="dl_32563024cfa8dd965075";
export const url=new URL("../icons/game_button_r-fill.svg?v=c1cb1a23954304868a80194c562743de75015867efec31c352bfb3a0f68b1b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
