export const name="raw_off-fill";
export const id="dl_a89cf20b57654732bf48";
export const url=new URL("../icons/R/raw_off-fill.svg?v=3ea99109fb53e01760ed7ef5bd874cffc7aab1ee0e988ac5e8b2f07f70612ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
