export const name="chess_rook-fill";
export const id="dl_85a79b1e107562c3db2a";
export const url=new URL("../icons/chess_rook-fill.svg?v=c44558c8d71cc56811cc9dcf8d8f7d187ba1dcd4419c0c3c9c9b0c55a50da468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
