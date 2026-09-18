export const name="game_button_zl";
export const id="dl_7a90f474f50b42c09801";
export const url=new URL("../icons/game_button_zl.svg?v=d0bf571cf27951d87d9affc89b9bc9671dc344b3111743e88ddb7781e520b90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
