export const name="map-pin-bold";
export const id="dl_079014f24c9f4a77924b";
export const url=new URL("../icons/map-pin-bold.svg?v=cf7c7072ee936e4bfcf2bb0329db3672409de946ec5a19d572fbbeb1e7beba83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
