export const name="water_loss-fill";
export const id="dl_263dc3fca58254d24b8f";
export const url=new URL("../icons/water_loss-fill.svg?v=85cf2bdd857b734a240c17bae0611a3e2ab22d8856f131b62ca6a2e3bf2e349a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
