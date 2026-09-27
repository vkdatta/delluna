export const name="wifi_home-fill";
export const id="dl_ff20f696caa4ea42a6e2";
export const url=new URL("../icons/wifi_home-fill.svg?v=df21dbdfa48e471c2db1c182dad758eadecaca864e0f61ad1c791d2a681b8e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
