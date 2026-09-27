export const name="pi-duotone";
export const id="dl_d5545ae2ca0948df92f7";
export const url=new URL("../icons/pi-duotone.svg?v=017165bd02075702af4346ad15a986029ede1a3c30d9d11ce7054984d91bf850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
