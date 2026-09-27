export const name="swap_driving_apps";
export const id="dl_04357a70049438ef140c";
export const url=new URL("../icons/swap_driving_apps.svg?v=e6b51075376b97b4a6cb3dc4d421c7d2145727450de21f225728fc1d6ce0fc85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
