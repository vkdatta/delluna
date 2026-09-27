export const name="lucid_1-alarm-clock-off";
export const id="dl_cdace504fbb4401fafbd";
export const url=new URL("../icons/lucid_1-alarm-clock-off.svg?v=2b05c29d745da761a7f47da23febde451d6534ffb49e9c61067e3a79b21c31d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
