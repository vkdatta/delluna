export const name="directions-fill";
export const id="dl_5e8b5b23ff979701b572";
export const url=new URL("../icons/directions-fill.svg?v=66290b0a764bbe6e91a77d114ec7b4b5e12bad57caf8330d0e3d5a50d242459c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
