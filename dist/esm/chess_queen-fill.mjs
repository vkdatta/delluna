export const name="chess_queen-fill";
export const id="dl_26096b9d57e24c9eb566";
export const url=new URL("../icons/C/chess_queen-fill.svg?v=3de35bb6cab1dc97b93db57f680b10bf0d4daf0a7d6984b06539d6819c4033c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
