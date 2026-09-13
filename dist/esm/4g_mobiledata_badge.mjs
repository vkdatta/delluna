export const name="4g_mobiledata_badge";
export const id="dl_bbff1b4e539c443b98a5";
export const url=new URL("../icons/4/4g_mobiledata_badge.svg?v=8ac7e7634ed4d730a1b16dea87b5e7130038c17c445406ade6b318b46ff2ca9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
