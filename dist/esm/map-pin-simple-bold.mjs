export const name="map-pin-simple-bold";
export const id="dl_00f5e2688b1c42a6a42f";
export const url=new URL("../icons/map-pin-simple-bold.svg?v=115e11229e78ab85c8b5274492c586ca94c817a2a549884e95b648d4a11aafce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
