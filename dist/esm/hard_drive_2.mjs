export const name="hard_drive_2";
export const id="dl_e3f03b3e3893452bbe2c";
export const url=new URL("../icons/H/hard_drive_2.svg?v=50993d7762c241fb1d5bcfb961523f1b39b58afed79417f687fd86c950ebe1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
