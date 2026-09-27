export const name="fiber_new";
export const id="dl_20f40f9914c8a8e93299";
export const url=new URL("../icons/fiber_new.svg?v=86b1855a7bb15ba13f599c372ba1874d63ff52338d45db1ef602d1ced173fa59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
