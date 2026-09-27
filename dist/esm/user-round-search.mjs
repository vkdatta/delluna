export const name="user-round-search";
export const id="dl_f86cff24491345cdb87d";
export const url=new URL("../icons/user-round-search.svg?v=3becc932b3148ca4c58664a15df913435b0d05512816442223640c2404e55bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
