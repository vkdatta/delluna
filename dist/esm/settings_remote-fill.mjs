export const name="settings_remote-fill";
export const id="dl_184a498724f5474fbb11";
export const url=new URL("../icons/settings_remote-fill.svg?v=015173c258ee73b4a4a9d2e34cb51fadbc6294eebe4e4c13a03cf66d8dd991ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
