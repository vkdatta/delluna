export const name="utility-pole";
export const id="dl_2a6e44436806429f9518";
export const url=new URL("../icons/utility-pole.svg?v=f8c3d5e66f5705aebaacb784450eaf2d7940d09203bbb280a44e0130c6c51a1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
