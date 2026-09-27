export const name="playing_cards-fill";
export const id="dl_399c017523a993b8a743";
export const url=new URL("../icons/playing_cards-fill.svg?v=938651c9e0b68154f24837b41a1e6eb3e924b4e26bce275fc4faa620efc6c477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
