export const name="chess_pawn";
export const id="dl_da57175ec9e14c3087b2";
export const url=new URL("../icons/C/chess_pawn.svg?v=8faa6e53d6c31c98bed2474389e94c3db579b0455d8e78ba9a9546823e0d9bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
