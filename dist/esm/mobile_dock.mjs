export const name="mobile_dock";
export const id="dl_bd0e9bcda238436aa550";
export const url=new URL("../icons/M/mobile_dock.svg?v=d6738c5fe6f81d35883ff6e819960707252db4ca7bd50f91f24d44118776867a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
