export const name="cards";
export const id="dl_e377d5c2e033416285e0";
export const url=new URL("../icons/cards.svg?v=de7215a56d6131de7ebded00390671efb03233830b77c41f7736a28baf2eb4da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
