export const name="game_bumper_left";
export const id="dl_a4e397ae36e127e78cbd";
export const url=new URL("../icons/game_bumper_left.svg?v=8c01e90e243fc89a806d31c9e9370c666a5b560fb305ae2782da7b46a27e648e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
