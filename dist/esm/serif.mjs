export const name="serif";
export const id="dl_8874cc778c9a452f65d4";
export const url=new URL("../icons/serif.svg?v=49a0bcac1058b6b3ad4983ccc907d6e6b579cbc9e11bdd671bb93ac8ca7c272d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
