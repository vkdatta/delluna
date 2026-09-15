export const name="chess_rook";
export const id="dl_9c3e738ad2b44045a9f4";
export const url=new URL("../icons/C/chess_rook.svg?v=3e72743a25e45df9f2f52decd853bcac265df9e6bb9440d475d37b2582147a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
