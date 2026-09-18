export const name="mode_heat_off-fill";
export const id="dl_8734ca827df94b15af60";
export const url=new URL("../icons/M/mode_heat_off-fill.svg?v=2a2e5f1f707ec46a1330971ccc04e6340cf55dd10080f9b3fdac6ee26dbfd4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
