export const name="cards_star";
export const id="dl_32c5133582524a2ba4fb";
export const url=new URL("../icons/cards_star.svg?v=e40edb0a59b0376c904c6f007c9ab0f43937bd88d73139cf5fd5c6b934769793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
