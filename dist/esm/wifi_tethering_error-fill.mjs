export const name="wifi_tethering_error-fill";
export const id="dl_b75532a6187d4f9f832c";
export const url=new URL("../icons/wifi_tethering_error-fill.svg?v=bc7a387826c96c5a214fe58989816abaf268ada00381339205a04e1bcc5c76e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
