export const name="chess_rook-fill";
export const id="dl_d85ca204a46b422ab7e2";
export const url=new URL("../icons/chess_rook-fill.svg?v=f18f3468e042c59b383da4ba13fed7bc93ede9c44eb096e466adba12bea2e510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
