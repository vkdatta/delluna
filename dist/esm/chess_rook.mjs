export const name="chess_rook";
export const id="dl_f20d45287bd9b667a55b";
export const url=new URL("../icons/chess_rook.svg?v=d19fe9f7b8ce0c84b2c52d797daa7b0508e983b6ca88906cff239f468ccc052a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
