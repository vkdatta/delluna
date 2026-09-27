export const name="tablet_mac-fill";
export const id="dl_0aec51450d90df31b590";
export const url=new URL("../icons/tablet_mac-fill.svg?v=d7794dceda0f4e1d8f884afabb07dff61bb83f70013a3e80388a7905555ae4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
