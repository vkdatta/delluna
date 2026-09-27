export const name="wifi-medium-duotone";
export const id="dl_c40b154cbd19e4f71ac1";
export const url=new URL("../icons/wifi-medium-duotone.svg?v=17ccf65d8eb9fd9a3dcf96122af4a3177b0a990061c18704f41c9bcc2673024d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
