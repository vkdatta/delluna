export const name="exercise-fill";
export const id="dl_868351d0b7cc8447adab";
export const url=new URL("../icons/exercise-fill.svg?v=dca4ec28a0a81b48f5333f1da6e9403f5b8ab66c40fd7461cbc2be97365c83c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
