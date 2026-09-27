export const name="switch_access_shortcut-fill";
export const id="dl_afe379928bdaac456a1c";
export const url=new URL("../icons/switch_access_shortcut-fill.svg?v=a09bda23f69a4ba881b842e727e93c8d88c91bdbcbe6233b7893574473be097c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
