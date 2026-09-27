export const name="detector_offline-fill";
export const id="dl_a5020573a62e391b7e81";
export const url=new URL("../icons/detector_offline-fill.svg?v=c78a05a05be31f39b2d0f697e3241a461eb97d28a21fd0901c18f1710032771e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
