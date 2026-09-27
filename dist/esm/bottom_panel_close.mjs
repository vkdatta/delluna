export const name="bottom_panel_close";
export const id="dl_74f6c2ddf28c790ce094";
export const url=new URL("../icons/bottom_panel_close.svg?v=ee5d8aef37a4d07496a33dcf0e110cf989c600450d8a1b493d1ad709183afa1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
