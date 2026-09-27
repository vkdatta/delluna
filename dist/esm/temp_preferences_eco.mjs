export const name="temp_preferences_eco";
export const id="dl_ea6a9a45469ea9f7d319";
export const url=new URL("../icons/temp_preferences_eco.svg?v=bd583662535ea645aa73a06e4506151e3154c5a32cdfb2c96207ee35c0a0cbba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
