export const name="chair-fill";
export const id="dl_c4de70eeb3684a7ca2f5";
export const url=new URL("../icons/chair-fill.svg?v=fbe7873c5d446d6ed788104fa15763af2fca0f72a9289d8d0a8c71aced00a64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
