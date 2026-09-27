export const name="bath_soak";
export const id="dl_1b29d660ceea6110b771";
export const url=new URL("../icons/bath_soak.svg?v=b03e56efe65f014d02270a2d30d43e211ab4e978670491dbe7bd9212e3a99a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
