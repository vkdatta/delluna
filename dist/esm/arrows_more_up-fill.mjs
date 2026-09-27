export const name="arrows_more_up-fill";
export const id="dl_f5cb9488cebdb160269e";
export const url=new URL("../icons/arrows_more_up-fill.svg?v=18e0b3c446271ea2dc97643156d4662ae3a776526429c1327db456861a39aff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
