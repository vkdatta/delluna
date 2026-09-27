export const name="map-pin-line";
export const id="dl_7182260574a24f6087d4";
export const url=new URL("../icons/map-pin-line.svg?v=4ec398caf141b43cd60c68e0dfb5029ed763bdedbf82e7242e5827f38c6169c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
