export const name="game_stick_l3";
export const id="dl_93ad91ae57b88dc3877c";
export const url=new URL("../icons/game_stick_l3.svg?v=3db68094a31f1bc146a8babcae5241a3cf3b87b25584c29c77473aacb172bf68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
