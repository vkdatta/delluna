export const name="chess_queen";
export const id="dl_55a12927d8954c0aa16a";
export const url=new URL("../icons/chess_queen.svg?v=30f17bc5f167465bd30d1b496ad877cd90ca3388252dbad1cca5b9016fc2ec31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
