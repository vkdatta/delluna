export const name="clock_arrow_up-fill";
export const id="dl_5b8b081573deb0cd90dd";
export const url=new URL("../icons/clock_arrow_up-fill.svg?v=cbdf15aed1ca336f439d8d57ab21caf0dae0769141a315457541bbe97961fce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
