export const name="lucid_1-chess-pawn";
export const id="dl_5798fd88a8ed483c85e2";
export const url=new URL("../icons/lucid_1-chess-pawn.svg?v=bb32880c22b7f8772ae132b58b48e60ca069517be575885f1a7d4ce55f7d0370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
