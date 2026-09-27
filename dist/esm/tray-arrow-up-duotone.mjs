export const name="tray-arrow-up-duotone";
export const id="dl_e611e07d913949572f07";
export const url=new URL("../icons/tray-arrow-up-duotone.svg?v=d0f860e41616457bf744c6b293c8a26ff18c890b10a988c397ad97df15b08f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
