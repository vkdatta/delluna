export const name="departure_board";
export const id="dl_5496262890f97b8e9fee";
export const url=new URL("../icons/departure_board.svg?v=1eb55ea0c89b84b943b28b17dd0620971648d9184f82ad214ee6ed1ed82bb6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
