export const name="number-square-one-duotone";
export const id="dl_edeae155e0044499a3fb";
export const url=new URL("../icons/number-square-one-duotone.svg?v=70708614a7a46225242a1dd23881503e454c946b3c2c65bf592b516a87a18fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
