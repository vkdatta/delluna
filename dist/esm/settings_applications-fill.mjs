export const name="settings_applications-fill";
export const id="dl_280ddc2b74b101af6c0a";
export const url=new URL("../icons/settings_applications-fill.svg?v=2075e4072ef921a6956dc86bcd1312283132c5ab5db38f6fcf6cc77904686b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
