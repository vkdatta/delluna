export const name="developer_board-fill";
export const id="dl_60383b66eee10bac0a4d";
export const url=new URL("../icons/developer_board-fill.svg?v=df7d566f3289569075d62cba67ba43e475413869c9086e287761d3b7dcdd437c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
