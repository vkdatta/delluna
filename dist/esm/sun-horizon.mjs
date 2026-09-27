export const name="sun-horizon";
export const id="dl_ceb4ec083210d9fa7255";
export const url=new URL("../icons/sun-horizon.svg?v=382bc03cef90aae840da7cba68bc8e0ebe86dfc7020510ff32f7d777f69635d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
