export const name="dice-two-fill";
export const id="dl_08f126c0e9784e14aff3";
export const url=new URL("../icons/dice-two-fill.svg?v=35ec206e7243b12b23fa4583bd3717c072d6bc8e74ad1dde576654e455343917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
