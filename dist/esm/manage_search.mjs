export const name="manage_search";
export const id="dl_26435b85eb584489cd34";
export const url=new URL("../icons/material_symbols/manage_search.svg?v=c81213f7fe8d60b235704063df70a8420bc2d49a859c2b2a0ddabd302150b79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
