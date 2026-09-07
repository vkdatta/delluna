export const name="truck-bold";
export const id="dl_030c19a2a37a46658184";
export const url=new URL("../icons/T/truck-bold.svg?v=2202973e7b4683ec4f0b94d00e52319deafa44fff5bae8234c0ed34d12fad015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
