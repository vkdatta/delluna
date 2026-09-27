export const name="map-pin-fill";
export const id="dl_db541a1a16a749d0bfab";
export const url=new URL("../icons/map-pin-fill.svg?v=6b091ddf3e7525c0133c20b0b0da4818808cf0b5af6753702aaac102c2023540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
