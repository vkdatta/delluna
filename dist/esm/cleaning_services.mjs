export const name="cleaning_services";
export const id="dl_6bbd7893392497a00e32";
export const url=new URL("../icons/cleaning_services.svg?v=f3396192bf371cacc84fa32e4b1f7d201e74f7d742579cc4c0c87be0e033bada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
