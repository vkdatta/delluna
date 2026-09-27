export const name="tram";
export const id="dl_4bb994e61038dbb5d1e5";
export const url=new URL("../icons/tram.svg?v=35fcdc9f164af40b59919ea0080bc3399504927b5482b9336fa06eb1bb8365dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
