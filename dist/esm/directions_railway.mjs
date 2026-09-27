export const name="directions_railway";
export const id="dl_7c6983ba527ca0965fa2";
export const url=new URL("../icons/directions_railway.svg?v=cd2d547a1c3fc9321f2543086966102531aa8f0224fd3dc025098ed4bb2b59a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
