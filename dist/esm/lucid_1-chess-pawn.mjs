export const name="lucid_1-chess-pawn";
export const id="dl_5798fd88a8ed483c85e2";
export const url=new URL("../icons/lucid_1-chess-pawn.svg?v=c4040d74b92e0d98a75f65ab1743a822c10310bf0e7d1c74787ef3ccfeb8b85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
