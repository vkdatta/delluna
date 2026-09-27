export const name="user-round-search";
export const id="dl_f86cff24491345cdb87d";
export const url=new URL("../icons/user-round-search.svg?v=123f5bbdf225d2300e950f8608e4e016699974af87156a8d4519e1f61a4d889e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
