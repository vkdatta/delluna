export const name="cards_star";
export const id="dl_b3cb417e9d66c3b4f44d";
export const url=new URL("../icons/cards_star.svg?v=204acabf93cb0fade090e58c4703c15b432ff6402d68e9aaf40aa92281f6a7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
