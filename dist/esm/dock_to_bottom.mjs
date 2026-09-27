export const name="dock_to_bottom";
export const id="dl_ffb294731320b430e9a8";
export const url=new URL("../icons/dock_to_bottom.svg?v=deb41e2325e321a0885b1bc82ff3ed59bc2628dce17b8e97e9c7d776a7deb70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
