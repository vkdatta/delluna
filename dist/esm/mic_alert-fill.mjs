export const name="mic_alert-fill";
export const id="dl_7a794345e3a287379a5c";
export const url=new URL("../icons/mic_alert-fill.svg?v=903d30680a76357e7d2837f1908a2ee64e90f2e0cb0f4f154eaa6c1cf160ce94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
