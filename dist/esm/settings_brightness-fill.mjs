export const name="settings_brightness-fill";
export const id="dl_ee1fd79ff250fdb1eda7";
export const url=new URL("../icons/settings_brightness-fill.svg?v=57d8b86c8d522515bbbd2b598eb9384fc43ff71861126c26eec0543298d66daa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
