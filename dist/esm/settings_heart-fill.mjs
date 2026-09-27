export const name="settings_heart-fill";
export const id="dl_95b5eec61935e6c354bd";
export const url=new URL("../icons/settings_heart-fill.svg?v=04752cf3200b9a12eccffb1e47ccb5e8d3aee2a3ee80248003c5766508731f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
