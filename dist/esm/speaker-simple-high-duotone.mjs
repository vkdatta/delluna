export const name="speaker-simple-high-duotone";
export const id="dl_cd0f84e1c1ec4067aba8";
export const url=new URL("../icons/S/speaker-simple-high-duotone.svg?v=64c83d23c90917f5e3e59432ccf8492389628f07c953827fa59b08af41f42353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
