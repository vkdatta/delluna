export const name="compass_calibration-fill";
export const id="dl_2b00db992497d4fd8f5a";
export const url=new URL("../icons/compass_calibration-fill.svg?v=4c641b98ffc156338d8f9b7635f7b0c3914b8e4f418fc394388ad494db9ed7a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
