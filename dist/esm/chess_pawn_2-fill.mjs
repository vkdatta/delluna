export const name="chess_pawn_2-fill";
export const id="dl_4011cc24270de44cbce9";
export const url=new URL("../icons/chess_pawn_2-fill.svg?v=84a413c222bd42f4c9d42cca9a86cf20104dffa318baa51cd88009ca2fd35130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
