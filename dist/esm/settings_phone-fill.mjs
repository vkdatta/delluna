export const name="settings_phone-fill";
export const id="dl_15059235f70dcee6ea12";
export const url=new URL("../icons/settings_phone-fill.svg?v=a12a116b750936f923e19a16b52d66e3875fa6442c1f86aeea162982083e8e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
