export const name="map-pin-plus-fill";
export const id="dl_b7fdcdbea389424fa917";
export const url=new URL("../icons/map-pin-plus-fill.svg?v=22b13d50a60c766510cd74d4736ccf1e23c78b2c3b79ba8fc647bd16e91c7ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
