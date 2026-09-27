export const name="electric_bike-fill";
export const id="dl_ccbc2edd1f079fbc5a9c";
export const url=new URL("../icons/electric_bike-fill.svg?v=a701c184e75c9e8e8c294dda943dd38872e108a74a36cb703a429f2d0bb824cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
