export const name="chess_king";
export const id="dl_50a7ce34fc20b814625f";
export const url=new URL("../icons/chess_king.svg?v=69899bf69875db9941d69dd4a48247658b01340aeba29500677237e57660cad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
