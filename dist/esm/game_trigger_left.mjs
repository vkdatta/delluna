export const name="game_trigger_left";
export const id="dl_f56aa6dfa8fd444eba7f";
export const url=new URL("../icons/G/game_trigger_left.svg?v=a6ba6ca1653ae9279129b5b6c205d607004ef209f98cca7381a9951872e1bb65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
