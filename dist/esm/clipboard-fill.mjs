export const name="clipboard-fill";
export const id="dl_0f12366da42344938b52";
export const url=new URL("../icons/clipboard-fill.svg?v=bffc94e50f82dfdc903c46e0a4174bbbe5eb90e2b6fc04ff5f4c078300cd6a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
