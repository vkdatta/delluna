export const name="device-tablet-speaker-duotone";
export const id="dl_9d72f064b2e1417ab300";
export const url=new URL("../icons/device-tablet-speaker-duotone.svg?v=689133b29c3c54fe6a3f3bf6683dd1edadfa591b64f4dd8471c3824ad8bb0961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
