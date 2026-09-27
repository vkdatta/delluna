export const name="chess_rook-fill";
export const id="dl_4d6f5a888d3656e73a93";
export const url=new URL("../icons/chess_rook-fill.svg?v=cd3dcb6df119f0690c70343fa12a35b1586404a661bf89ff7b54528ca84a568d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
