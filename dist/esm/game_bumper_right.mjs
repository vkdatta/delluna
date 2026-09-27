export const name="game_bumper_right";
export const id="dl_9dc01fc4c971f09412d4";
export const url=new URL("../icons/game_bumper_right.svg?v=794035c96ad068a73653bf0dcdd912fa5104ad480d0b309ceb196d144c736b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
