export const name="settings_remote-fill";
export const id="dl_11d2c5506c8a0359f227";
export const url=new URL("../icons/settings_remote-fill.svg?v=b94596f8491c3f5716c878fa5fa1305db27f7e8b7f872f69e936b3d2cff5c309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
