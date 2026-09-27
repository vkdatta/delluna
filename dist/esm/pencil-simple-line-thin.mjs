export const name="pencil-simple-line-thin";
export const id="dl_276208f3e290453db1ff";
export const url=new URL("../icons/pencil-simple-line-thin.svg?v=d94fad5ed27f4c06d6d765095d159f7b93ac9b79abe8ef217ab9bf9a86b3ffbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
