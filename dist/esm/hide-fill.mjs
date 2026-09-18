export const name="hide-fill";
export const id="dl_f547c07cb5f541c391cf";
export const url=new URL("../icons/H/hide-fill.svg?v=fa5a1fbea2079892df03f250adfb788ef24116723c4a1ef1bc2afac519850c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
