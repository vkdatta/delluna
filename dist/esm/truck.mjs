export const name="truck";
export const id="dl_9b2c7d40d97f4beeb7dd";
export const url=new URL("../icons/truck.svg?v=aa77ceeee465969755880ef45e3ae2fd68214eba4f843a4335c218d042770fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
