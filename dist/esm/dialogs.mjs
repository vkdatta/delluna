export const name="dialogs";
export const id="dl_79d8448e68a743ebb706";
export const url=new URL("../icons/D/dialogs.svg?v=6efa48978ac687ff511ea3f22fd16d5eb99dabe2e49e82026ec56d39633b2d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
