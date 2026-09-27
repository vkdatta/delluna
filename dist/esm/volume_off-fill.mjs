export const name="volume_off-fill";
export const id="dl_978d096bf17aa2b1f079";
export const url=new URL("../icons/volume_off-fill.svg?v=e33240a566d58127bb4791af78f0ee1a40bf75010690444dceee8236619e99d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
