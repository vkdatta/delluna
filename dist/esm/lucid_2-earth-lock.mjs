export const name="lucid_2-earth-lock";
export const id="dl_69f5703304dd4065979b";
export const url=new URL("../icons/lucid_2-earth-lock.svg?v=c5acc2e3467903acdca811ade20e389aa1fc174d5a84a0dde858561b26bab2ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
