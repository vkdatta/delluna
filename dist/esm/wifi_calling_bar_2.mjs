export const name="wifi_calling_bar_2";
export const id="dl_8b2aaa819b319494933d";
export const url=new URL("../icons/wifi_calling_bar_2.svg?v=6d9499a24edfb01188633c76c200ed4c4d24ee8ee4e82eede90f118d54887e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
