export const name="lock-open-fill";
export const id="dl_cb5a21f1cffb4aeababa";
export const url=new URL("../icons/lock-open-fill.svg?v=b756044ca9e264caf7ddba2bb24d440bf0b659017734177014ef2189db6b4df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
