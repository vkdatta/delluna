export const name="game-controller";
export const id="dl_68996279190c443b8060";
export const url=new URL("../icons/game-controller.svg?v=57acde44a828973e375b894871295adc17aba794bf2ffda153d0b14809ad3730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
