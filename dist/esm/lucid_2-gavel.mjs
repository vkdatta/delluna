export const name="lucid_2-gavel";
export const id="dl_5117c2d58a5c4cdc8485";
export const url=new URL("../icons/lucid_2-gavel.svg?v=f2cdbb3a119eb52af6e855509154ef4d09a179ee35c782a2cabdb03654e2505a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
