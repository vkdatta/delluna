export const name="linkedin-logo-fill";
export const id="dl_dd0b5bf6b58f45d1b3fd";
export const url=new URL("../icons/linkedin-logo-fill.svg?v=4adb4cdc0720c743741426499e3df4cc47762f5d3a41c08dd9d0148ba50ed9e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
