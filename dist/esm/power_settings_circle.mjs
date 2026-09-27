export const name="power_settings_circle";
export const id="dl_ab36be81da98c189cc41";
export const url=new URL("../icons/power_settings_circle.svg?v=46f6e4d4cb594c3c2503cbef1d159238393259c61dc38e95b50daee1d8856efb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
