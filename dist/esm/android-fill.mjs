export const name="android-fill";
export const id="dl_ec89601392770938aec2";
export const url=new URL("../icons/android-fill.svg?v=64008b448fdf2f4734743873eec6e0000b6e04de1e723ff4c477a9a5aa8ac454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
