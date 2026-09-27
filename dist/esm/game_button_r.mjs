export const name="game_button_r";
export const id="dl_229e5a51538c52e36ed1";
export const url=new URL("../icons/game_button_r.svg?v=3a622a7a634baea0230603e50b04e5234f86039846513712de01387c0dcae299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
