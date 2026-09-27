export const name="car_crash-fill";
export const id="dl_8a15836b5d01450d7c5d";
export const url=new URL("../icons/car_crash-fill.svg?v=83d937e81c95fa0d4303fa603be8dfe39ee0b64159fc2c34b89b63fe273da46b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
