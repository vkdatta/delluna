export const name="lucid_1-cable";
export const id="dl_328a82303a714ac0892c";
export const url=new URL("../icons/lucid_1-cable.svg?v=d07b9250c81ceb1f13dc03df031529726abd72f3fffe4c4b4b942cdaab0566ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
