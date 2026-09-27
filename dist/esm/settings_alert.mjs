export const name="settings_alert";
export const id="dl_45142d8ef9be830438cb";
export const url=new URL("../icons/settings_alert.svg?v=d063868193282ec38db33c3b2366e90e898289e284c9bf7daa44b754321639aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
