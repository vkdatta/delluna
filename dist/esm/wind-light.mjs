export const name="wind-light";
export const id="dl_deb83a5715474467baea";
export const url=new URL("../icons/W/wind-light.svg?v=b19a003dff485631a1d13720366b399953111b6c320170d12d71da44aeb7fb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
