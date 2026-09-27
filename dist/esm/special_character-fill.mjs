export const name="special_character-fill";
export const id="dl_955a919c71eeb979c61b";
export const url=new URL("../icons/special_character-fill.svg?v=3a725728e9a6c37032d83d14d7145280141ea2029f637a1bba44fb8ea52e5317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
