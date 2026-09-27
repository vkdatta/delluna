export const name="chess_pawn-fill";
export const id="dl_5e1ce15c8cce95161fa9";
export const url=new URL("../icons/chess_pawn-fill.svg?v=f565e03a4221549f14ec837201ef86717aa99f1f793dff5a6b0230674ab82a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
