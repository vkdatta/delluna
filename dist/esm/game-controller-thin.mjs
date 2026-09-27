export const name="game-controller-thin";
export const id="dl_ec1aca5186f7460283a1";
export const url=new URL("../icons/game-controller-thin.svg?v=5d656ae202e475cfb38ffb6dafaf530dfe3b1ed4ac80d8a3370bad64543d5103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
