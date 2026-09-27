export const name="temp_preferences_eco";
export const id="dl_541a7553cdb314524c2e";
export const url=new URL("../icons/temp_preferences_eco.svg?v=e2b309d4d09453838ad919b978985c77202c66f8524551550f0ea79bf32da1e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
