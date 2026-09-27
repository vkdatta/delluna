export const name="map-pin-plus";
export const id="dl_912a092deb664e9da819";
export const url=new URL("../icons/map-pin-plus.svg?v=e0bf70b3e8fe66af9fac7ba2c3d63812aae7baadbdbca2948c0a1c2c53678964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
