export const name="corners-out-thin";
export const id="dl_1d0be47708b64782828b";
export const url=new URL("../icons/corners-out-thin.svg?v=25a97536a1a76fa16cda170043a6fe9472d64edfaf88504f741356e74a51b96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
