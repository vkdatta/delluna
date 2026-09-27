export const name="alarm-light";
export const id="dl_13ffd4e46006481190e3";
export const url=new URL("../icons/alarm-light.svg?v=40dad2b3fc454d249bcc1c56760a10d88283900af83a55a96de5ef9fb82a6844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
