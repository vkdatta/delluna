export const name="toggle_off";
export const id="dl_d8e43366c3974036b4c4";
export const url=new URL("../icons/T/toggle_off.svg?v=025436121d725927f763b6e414a54867f1e10f25bc3feace5a477898f48589d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
