export const name="graduation-cap-thin";
export const id="dl_487674823ca949deb619";
export const url=new URL("../icons/graduation-cap-thin.svg?v=d027efa3a23583f407b269e4536519b820dc69555fc81602782c93778eaa4749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
