export const name="device-mobile-speaker-duotone";
export const id="dl_d1b3cd5de12c4d9f82d9";
export const url=new URL("../icons/device-mobile-speaker-duotone.svg?v=048b4a6a311a15002cf38984dfedd9e2f8df5ffbfcb2e63de61d46aa1ce9ab4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
