export const name="equalizer-thin";
export const id="dl_d29bec450eaa4473b722";
export const url=new URL("../icons/equalizer-thin.svg?v=f1ebbc2538c55e0f19ffb80f5ac1ef1907fa4fcd2a5e66d993a853611a63caee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
