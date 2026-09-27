export const name="settings_motion_mode-fill";
export const id="dl_76b8de089eea024d8c73";
export const url=new URL("../icons/settings_motion_mode-fill.svg?v=53917d8fccbf948f9350b07ea9163028c56d77ad8a6a85d7ee5fa23b7f704c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
