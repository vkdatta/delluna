export const name="map-pin-plus-thin";
export const id="dl_7db1dd90bc3a43c5b1cf";
export const url=new URL("../icons/map-pin-plus-thin.svg?v=61989c8f57e13000faba6d4504ed6310327fe2f87ce367e791d272a0891e79a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
