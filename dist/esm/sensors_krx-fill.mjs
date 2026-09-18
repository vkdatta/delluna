export const name="sensors_krx-fill";
export const id="dl_a32c773f97c843b08b4b";
export const url=new URL("../icons/S/sensors_krx-fill.svg?v=81d58f8f8faa41e70b0b25e498e8e98cb41d5684a9c5be8998c6a45043e31a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
