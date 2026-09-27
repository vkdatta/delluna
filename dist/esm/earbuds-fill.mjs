export const name="earbuds-fill";
export const id="dl_a7e370e2c7941018df3f";
export const url=new URL("../icons/earbuds-fill.svg?v=a3229b8600532eddb20d435a748a90cb5907b79b9af256d2c05a8496192ca00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
