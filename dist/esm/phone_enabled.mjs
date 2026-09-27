export const name="phone_enabled";
export const id="dl_10bf1f666cc7132dfab1";
export const url=new URL("../icons/phone_enabled.svg?v=68631224975a7f7aaae666de9002445b139cf0dadb3448f60b95570050a9efcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
