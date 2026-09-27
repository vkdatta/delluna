export const name="lock_clock-fill";
export const id="dl_e46d5e031b90d0dd0d40";
export const url=new URL("../icons/lock_clock-fill.svg?v=e7ac5be3ec97780cee4d782363e6287f1348c10924387a43796a852c6749ebdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
