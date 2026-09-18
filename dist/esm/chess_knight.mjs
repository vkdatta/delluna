export const name="chess_knight";
export const id="dl_aef3ee26dcb04c1ea6e8";
export const url=new URL("../icons/chess_knight.svg?v=bc59b1efdad5c4cc929bc308b00fcc8eb05a98bf73273df84e8b6ebcf3957396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
