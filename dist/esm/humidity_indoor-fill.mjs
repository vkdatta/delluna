export const name="humidity_indoor-fill";
export const id="dl_8210054428f305b258ed";
export const url=new URL("../icons/humidity_indoor-fill.svg?v=e12d649612ad4b2251adab942fe48fa2d152cd07bbb5e007058ff369731d1714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
