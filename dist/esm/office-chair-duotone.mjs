export const name="office-chair-duotone";
export const id="dl_7060a0ec88e44034802a";
export const url=new URL("../icons/office-chair-duotone.svg?v=2ef0a020e48413f0708029395c648cc10df6a59e0346bdd3ade237bdd7c17a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
