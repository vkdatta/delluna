export const name="google-chrome-logo-duotone";
export const id="dl_0a966e6d16fd400bb0ea";
export const url=new URL("../icons/google-chrome-logo-duotone.svg?v=e13e92ecd59f5ef4946e09ffb1a62bc03bf631642df6a893566e0c6622afbb93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
