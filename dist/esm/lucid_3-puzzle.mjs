export const name="lucid_3-puzzle";
export const id="dl_3b0c7b7a484c4e6e8251";
export const url=new URL("../icons/lucid_3-puzzle.svg?v=6be3066675198e0d7119facb9673a7119434c9591dbc04dda7de62610064919e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
