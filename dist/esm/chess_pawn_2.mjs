export const name="chess_pawn_2";
export const id="dl_b28689abe7a952a8b0c9";
export const url=new URL("../icons/chess_pawn_2.svg?v=d2f6126f2732d34ce08347d22540b2904526626f7ae7f18625fa42fe16034eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
