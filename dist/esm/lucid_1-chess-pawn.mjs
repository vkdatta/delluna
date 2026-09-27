export const name="lucid_1-chess-pawn";
export const id="dl_5798fd88a8ed483c85e2";
export const url=new URL("../icons/lucid_1-chess-pawn.svg?v=d6416e919c77fdeff7d0a5871f5b8191bda85b6a2fbda4d8dd95c96871846294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
