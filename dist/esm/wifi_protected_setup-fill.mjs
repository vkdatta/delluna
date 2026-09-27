export const name="wifi_protected_setup-fill";
export const id="dl_b78441110f5f2d7b4eb3";
export const url=new URL("../icons/wifi_protected_setup-fill.svg?v=3befd6deaf2db8195aed2ae9f84a2407727356d0956266231cddfd738ddbb75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
