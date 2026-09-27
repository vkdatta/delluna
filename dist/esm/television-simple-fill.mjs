export const name="television-simple-fill";
export const id="dl_4010546da3f4e1d25927";
export const url=new URL("../icons/television-simple-fill.svg?v=74415f07eb164618bddcb273606cfbc6bbacb87a72543b55a02e59f723e69d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
