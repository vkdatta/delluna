export const name="chess_pawn";
export const id="dl_68d6cc7efcc7faca7f9d";
export const url=new URL("../icons/chess_pawn.svg?v=40965d9e1465097f2c3d8476576d313f5ecd182a318f9e13613501077e93b059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
