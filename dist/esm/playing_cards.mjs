export const name="playing_cards";
export const id="dl_1981005c881866876fae";
export const url=new URL("../icons/playing_cards.svg?v=92bf1553a8c79721264f9b480bdc34976d7e619f37e79c12c35fd8a1522745df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
