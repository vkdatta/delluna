export const name="pizza-thin";
export const id="dl_dfaee60244cd44d7aa9e";
export const url=new URL("../icons/pizza-thin.svg?v=e31bd45fcb5c35b12e75c18e62903ae8fe6b15979cdc9fbb24fd7d2fcedbf530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
