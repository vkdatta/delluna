export const name="bus-bold";
export const id="dl_ecd5b43d21084592b46e";
export const url=new URL("../icons/bus-bold.svg?v=8e0afc6501faefd0053968b6510642ac65a7ece87d99cbc396ac0f9a51cb589b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
