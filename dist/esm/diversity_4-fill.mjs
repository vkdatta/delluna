export const name="diversity_4-fill";
export const id="dl_9ea3b6b798924db4913d";
export const url=new URL("../icons/diversity_4-fill.svg?v=1fbff76191ac12349dfba6a54bef7a010524230306e25badd94d2bad699615ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
