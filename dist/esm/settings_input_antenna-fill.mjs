export const name="settings_input_antenna-fill";
export const id="dl_28ee2f2830ffb7cf1a50";
export const url=new URL("../icons/settings_input_antenna-fill.svg?v=8ef3a697f981811db117920cb3142557d4c9a9cb0a8b58e043376ff5869b2469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
