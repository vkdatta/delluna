export const name="cards_stack-fill";
export const id="dl_119caba481b44f6890bc";
export const url=new URL("../icons/C/cards_stack-fill.svg?v=bba31590cdb5c53fd1c6e11e97f322fde928f6c4b274382f9420f22198ea766b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
