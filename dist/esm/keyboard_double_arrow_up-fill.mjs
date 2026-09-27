export const name="keyboard_double_arrow_up-fill";
export const id="dl_6c337641dbe0c7ea27af";
export const url=new URL("../icons/keyboard_double_arrow_up-fill.svg?v=8cf4b88e4aec5c56e9ec62d5ef94013589f48e67a0ae25824d7c57a38cbc091f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
