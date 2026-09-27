export const name="battery_android_share";
export const id="dl_c1fb7e2b1ded301be87c";
export const url=new URL("../icons/battery_android_share.svg?v=1627884d8a5f04b850466f33ddddd9041165b203e64026b08fcae42d686bc0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
