export const name="serif";
export const id="dl_bd2f86727a26ada403f7";
export const url=new URL("../icons/serif.svg?v=18ecc5e74e76e2ce81de412e8346712b1888033b3e6a2241c308e1ac277ec55c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
