export const name="ev_shadow";
export const id="dl_264bf8967cb5adf8e009";
export const url=new URL("../icons/ev_shadow.svg?v=bb98d0c5941fb07a02751d587e3e060b8972950041752a427bb8a97498e9c431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
