export const name="chess_pawn-fill";
export const id="dl_90b7a63483934514a185";
export const url=new URL("../icons/chess_pawn-fill.svg?v=b50702c8402ad81f6431e6ee54aec447ae0cc8fce1adcc8eec47693d0164f564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
