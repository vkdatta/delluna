export const name="chess_queen-fill";
export const id="dl_ebe84f15ea29f02d2120";
export const url=new URL("../icons/chess_queen-fill.svg?v=c3f2a010dab1ff2dcc46a9c071edee261a2114da699b0ac9def01e7108a494ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
