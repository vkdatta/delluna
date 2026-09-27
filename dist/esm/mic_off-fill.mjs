export const name="mic_off-fill";
export const id="dl_c887877974e6a729cf90";
export const url=new URL("../icons/mic_off-fill.svg?v=521b8ac78eb3d1093be30eb2f7ce26a00a1b6d9df3037d569429ec945b0a1f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
