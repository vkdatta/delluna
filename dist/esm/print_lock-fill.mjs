export const name="print_lock-fill";
export const id="dl_1f984e77e43ecffe8625";
export const url=new URL("../icons/print_lock-fill.svg?v=bd324d96a19dc11e441a07a49920855c1942fbf80cc11e57262b1507f2b46e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
