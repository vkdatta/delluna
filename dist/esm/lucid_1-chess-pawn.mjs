export const name="lucid_1-chess-pawn";
export const id="dl_5798fd88a8ed483c85e2";
export const url=new URL("../icons/lucid_1-chess-pawn.svg?v=f9a55e040685e783cb3add0af87c4500eddede382be3b19e3c22a154b9d8bf30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
