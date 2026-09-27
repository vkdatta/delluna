export const name="shower-fill";
export const id="dl_579b9c04b1125c1fb081";
export const url=new URL("../icons/shower-fill.svg?v=656677952a3a8a17f829bc9b320bec369a22f364b19ab779a1fd0bd37d7f2d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
