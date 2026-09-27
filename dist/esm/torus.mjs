export const name="torus";
export const id="dl_bd6e69b0722942928ce8";
export const url=new URL("../icons/torus.svg?v=44da84da0a8d2f11c4eaa147150256e240e84d08412f6070df07e63f433be80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
