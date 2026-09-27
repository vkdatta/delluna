export const name="lamp-pendant";
export const id="dl_e01d32823cf54564a4e9";
export const url=new URL("../icons/lamp-pendant.svg?v=ef38c99cf015454eadee15a01e9d841249d455ad15b69fe1eb39dc23105382bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
