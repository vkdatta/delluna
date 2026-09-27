export const name="game_stick_l3-fill";
export const id="dl_4696c257f58ba36c208c";
export const url=new URL("../icons/game_stick_l3-fill.svg?v=a2ce9b5334cca1b21a497f7088caede72e813fbe3b62fd370090478311a27225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
