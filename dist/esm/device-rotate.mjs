export const name="device-rotate";
export const id="dl_6c8b5a0ef6e54aa7a548";
export const url=new URL("../icons/device-rotate.svg?v=da093221eb8f3e3e61217e8b695671222a9a139b770a119f14b40a813af3a9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
