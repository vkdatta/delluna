export const name="kanban-bold";
export const id="dl_11d2754d038e461cb9b5";
export const url=new URL("../icons/kanban-bold.svg?v=7811c2a91c5e568fd58cf35c57bb2d67934cf8796cd3415fdd3f554db43524ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
