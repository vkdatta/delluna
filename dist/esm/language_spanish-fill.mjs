export const name="language_spanish-fill";
export const id="dl_4d566a81098841d409ae";
export const url=new URL("../icons/language_spanish-fill.svg?v=688d32b05c5dd0e4129e254524dc16035f08186e914da33842e29a0fbc924ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
