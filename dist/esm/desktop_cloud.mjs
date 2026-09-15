export const name="desktop_cloud";
export const id="dl_570a31b733034b2f933f";
export const url=new URL("../icons/D/desktop_cloud.svg?v=1273848f823091e3dc564f808f9aa989dccd3a18f91ce8cfd91e13dbd08c1a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
