export const name="h_plus_mobiledata_badge";
export const id="dl_5b7f53b4ce324767a972";
export const url=new URL("../icons/h_plus_mobiledata_badge.svg?v=6d0142f7675e0f78983a9f3148692edf526e682157a619d8557eb826b816fbdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
