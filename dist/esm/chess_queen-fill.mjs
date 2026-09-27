export const name="chess_queen-fill";
export const id="dl_3b52aa22aa604cf43c67";
export const url=new URL("../icons/chess_queen-fill.svg?v=26759fc20b4d802efd2b24f56fe2cc5c058be04974cf51596ac093bc11715d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
