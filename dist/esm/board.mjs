export const name="board";
export const id="dl_4c3ef9a728d24757883e";
export const url=new URL("../icons/board.svg?v=afb63ab54b496f054b106b39d505a6299b3bee5f1df2f72d88f888b6a3e04dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
