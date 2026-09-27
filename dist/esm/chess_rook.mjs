export const name="chess_rook";
export const id="dl_735de80a5829972214e4";
export const url=new URL("../icons/chess_rook.svg?v=2e4581838896cfa07c8ac4ddc85e33071c78c9f3ed5edc5227caa71ee1f79479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
