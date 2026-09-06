export const name="avocado-duotone";
export const id="dl_531199348831400e9c22";
export const url=new URL("../icons/avocado-duotone.svg?v=1df243dbc346b35c0d6fab3683da95173748f2f07593c6d08a7236f4e2dbd92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
