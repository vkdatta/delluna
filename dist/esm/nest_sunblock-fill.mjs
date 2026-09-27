export const name="nest_sunblock-fill";
export const id="dl_79c0e3c2d582086a786e";
export const url=new URL("../icons/nest_sunblock-fill.svg?v=474aad30c655c425886a5c1d51d75b90c1c15b3ed44357922bdf988d852b322a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
