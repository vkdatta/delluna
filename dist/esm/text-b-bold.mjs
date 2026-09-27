export const name="text-b-bold";
export const id="dl_47aa84e5eb2632642737";
export const url=new URL("../icons/text-b-bold.svg?v=c3dea4577ef4d4ac0711ee9e1a2e524c497c531aa1e86c103d27a4cc2958790c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
