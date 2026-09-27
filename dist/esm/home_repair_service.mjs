export const name="home_repair_service";
export const id="dl_138eec4470141fdb37ec";
export const url=new URL("../icons/home_repair_service.svg?v=98864c4851093b5c6db679e529eee84e5ddce155d616b82522e6152db1364b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
