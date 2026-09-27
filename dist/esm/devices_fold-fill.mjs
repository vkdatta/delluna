export const name="devices_fold-fill";
export const id="dl_081264ba60cf06b4b4d6";
export const url=new URL("../icons/devices_fold-fill.svg?v=2086f3aab6ed83a3dae4ba230c4955c83407ffa61620379fe4465b158429abde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
