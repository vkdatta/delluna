export const name="chess_king_2";
export const id="dl_05dbdd36b6894b16af50";
export const url=new URL("../icons/chess_king_2.svg?v=14d939c18ce8bc4a45ca86b46aed2608db4a0fb9bb3b54e8912241fe2b5b790d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
