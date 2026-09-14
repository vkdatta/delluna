export const name="app_registration-fill";
export const id="dl_7510a85d80c546438c62";
export const url=new URL("../icons/A/app_registration-fill.svg?v=4dc62ed765c946329eda321060997d70f4ec5d6c5a68c59edf5acd4ec6fe6ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
