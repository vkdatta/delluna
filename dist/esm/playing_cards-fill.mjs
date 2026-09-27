export const name="playing_cards-fill";
export const id="dl_ce41e8f1ebaa03c39659";
export const url=new URL("../icons/playing_cards-fill.svg?v=31f3880df256ea06b792d05ca204fb24340680967ea5e0eecc34f8cfdb6587c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
