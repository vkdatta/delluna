export const name="personal_injury";
export const id="dl_59b8e770797f6e168097";
export const url=new URL("../icons/personal_injury.svg?v=183c8bbd96cecb225ad5e3b764dded2193a4408981a1d691dadb33f73e8ae1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
