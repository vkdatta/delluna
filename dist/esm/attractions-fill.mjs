export const name="attractions-fill";
export const id="dl_e63a07f3cb9f4d7380c3";
export const url=new URL("../icons/attractions-fill.svg?v=a9dc78efa658cd0ad5155392ea8f64d32a675c983315272fb1815927f1b442d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
