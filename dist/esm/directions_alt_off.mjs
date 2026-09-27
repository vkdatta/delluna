export const name="directions_alt_off";
export const id="dl_f9d1b333ea0e41daf024";
export const url=new URL("../icons/directions_alt_off.svg?v=9cdba5370900703430512db28a0442e73c1ac35ae8d568439004b3231c5c44a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
