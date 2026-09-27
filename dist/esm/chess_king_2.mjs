export const name="chess_king_2";
export const id="dl_bef98436367d23fcb140";
export const url=new URL("../icons/chess_king_2.svg?v=9701482e30d73dda2dd9640fa26c72603e9fe832747cd0626799378b2d03a4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
