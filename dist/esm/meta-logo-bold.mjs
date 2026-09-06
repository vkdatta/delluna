export const name="meta-logo-bold";
export const id="dl_245fc7df52bf4375afb5";
export const url=new URL("../icons/meta-logo-bold.svg?v=8b2bfe333d256fb6bef22161d6f21321fe389612bee0acaa701b1b2aa20643d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
