export const name="settings_b_roll-fill";
export const id="dl_7ef2f31a8fcec837c01a";
export const url=new URL("../icons/settings_b_roll-fill.svg?v=7f56c77192484147d14bc19b6ed769284ed1c888621dc0295e4ad8ee8ce9c0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
