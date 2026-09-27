export const name="settings_motion_mode";
export const id="dl_13100d8b35e69aca42db";
export const url=new URL("../icons/settings_motion_mode.svg?v=56235d94e44e608cbb0fa0141737c2cb449504063a281bfee402ebdc12b31098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
