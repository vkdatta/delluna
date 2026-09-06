export const name="map-trifold-light";
export const id="dl_dff66ee43c1b43c69909";
export const url=new URL("../icons/map-trifold-light.svg?v=ae0ccb5357a25c7221013d556282c6ffb2cc644de0fd47658718bf8a4dc6581e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
