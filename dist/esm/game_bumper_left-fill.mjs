export const name="game_bumper_left-fill";
export const id="dl_bf29512942335561fc98";
export const url=new URL("../icons/game_bumper_left-fill.svg?v=f7dd8b933476a08c3e9d0cb857d6849091715fb9848cb053c9be4b1404337ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
