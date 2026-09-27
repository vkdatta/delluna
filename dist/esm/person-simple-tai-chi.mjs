export const name="person-simple-tai-chi";
export const id="dl_2b4f66b57e3c44c398ff";
export const url=new URL("../icons/person-simple-tai-chi.svg?v=f36e4d1cd80c1c91234f3b323f92a9ceafb7f2917da1dad264cb32b15a614fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
