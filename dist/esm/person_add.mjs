export const name="person_add";
export const id="dl_e51ea2947d7fd39a62dd";
export const url=new URL("../icons/person_add.svg?v=d4a859f928f8617288842aebf20e910c3860c1b62848159662650b8d3ae35dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
