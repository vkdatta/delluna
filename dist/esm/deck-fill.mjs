export const name="deck-fill";
export const id="dl_6d8e19486c99ab918cf7";
export const url=new URL("../icons/deck-fill.svg?v=be566cfc5bee8b5dd0c3e03d7f3c6c59325234934fb25a4a0be8cb1dfed8566b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
