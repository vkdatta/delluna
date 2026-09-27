export const name="battery_error-fill";
export const id="dl_9facc2afeabcd5807546";
export const url=new URL("../icons/battery_error-fill.svg?v=a470ab591c7341fdfaa460424ba6cd2360faacdfd585f38570157c8e96da8953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
