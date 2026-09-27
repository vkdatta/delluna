export const name="game_button_zl";
export const id="dl_c196ba91d98ade25e9fb";
export const url=new URL("../icons/game_button_zl.svg?v=c773d2e76bd21c152755348880741814965811d9a48968f226700bbebb3ff324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
