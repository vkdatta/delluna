export const name="chess_pawn-fill";
export const id="dl_344425334b32976872ef";
export const url=new URL("../icons/chess_pawn-fill.svg?v=ed822dd0436094d54331d3496a386feda45a4e7afab7c20c0163b122d15b3e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
