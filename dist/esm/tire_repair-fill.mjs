export const name="tire_repair-fill";
export const id="dl_1d38d33e38ded50b4042";
export const url=new URL("../icons/tire_repair-fill.svg?v=efe1c60dc8fc37964b5d563cae230a047002d2c36d4ea20e87fbb312cdcfd289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
