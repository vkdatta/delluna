export const name="footprints-light";
export const id="dl_d645b73b12994168a0a7";
export const url=new URL("../icons/footprints-light.svg?v=7404983edefbee84200372ed8156f6cddb631dbaeedc2577ebf0ed4b021e3996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
