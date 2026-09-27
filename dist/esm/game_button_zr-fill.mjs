export const name="game_button_zr-fill";
export const id="dl_e6a411069f9f20448742";
export const url=new URL("../icons/game_button_zr-fill.svg?v=9cd6ffab1daf020d2125b80752ee5cf4d13483882c1059eb21a51a1b63ce3cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
