export const name="tabs-bold";
export const id="dl_a59495770899cc3706e6";
export const url=new URL("../icons/tabs-bold.svg?v=dd3ded614f4c64a3a75aa843d067e7ff9feeeace05cb7e90a77ba360094298b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
