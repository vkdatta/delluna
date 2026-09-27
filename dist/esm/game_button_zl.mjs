export const name="game_button_zl";
export const id="dl_2a7d40bde5095464e1fe";
export const url=new URL("../icons/game_button_zl.svg?v=2bac353450a2311619c7f35d0d74a764269b6191852333fa3e353959a710a47f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
