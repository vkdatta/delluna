export const name="playing_cards-fill";
export const id="dl_7e3b34384e4f4576bac4";
export const url=new URL("../icons/P/playing_cards-fill.svg?v=4e6fb5ab9b74509feba37e2cdbc6fc89a30841188528f4741cc992764d5cd5ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
