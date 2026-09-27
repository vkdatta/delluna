export const name="chess_king_2-fill";
export const id="dl_360428b18671f0839040";
export const url=new URL("../icons/chess_king_2-fill.svg?v=df2f236a6856f24524daf154ea5b9462263508c2b049385a6baa2a776b8243a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
