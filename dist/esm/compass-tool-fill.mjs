export const name="compass-tool-fill";
export const id="dl_f14725cba0b34de5929b";
export const url=new URL("../icons/compass-tool-fill.svg?v=80974c05dceb39064fdfcdeb39caf712b661f8a56db902674ac27b581ecc0fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
