export const name="wifi-low-fill";
export const id="dl_924a32c40aa419cd87ef";
export const url=new URL("../icons/wifi-low-fill.svg?v=7aad6a23eb15064eeeac80074eade698af2ae39f45e153c458e3066a7668eb76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
