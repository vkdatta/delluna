export const name="stool-duotone";
export const id="dl_d2fbd8c03bf35caf1a9c";
export const url=new URL("../icons/stool-duotone.svg?v=ac913611293257701edab56efd1081d1708bb3ccc69336d8f189cb135782fd05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
