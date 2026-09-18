export const name="settings_screen-fill";
export const id="dl_2db363e247e94a9c87ec";
export const url=new URL("../icons/settings_screen-fill.svg?v=fb4d38ec47afc75e737f09f30da60ead27d4325f7b086b3aa75ad3d0860679e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
