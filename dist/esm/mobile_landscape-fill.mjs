export const name="mobile_landscape-fill";
export const id="dl_56da7bb67aef8c3090ed";
export const url=new URL("../icons/mobile_landscape-fill.svg?v=3e7e46e710d7f23b19fc0d66d7ace0b9a425611a20b168937534036ee8651765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
