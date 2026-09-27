export const name="nest_wake_on_approach-fill";
export const id="dl_6b149a3ae930f4769835";
export const url=new URL("../icons/nest_wake_on_approach-fill.svg?v=3273d0a805b2e044b2af4ef750ab9148312ee12d82a4861d5576250068341cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
