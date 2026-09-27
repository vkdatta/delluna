export const name="floppy-disk-light";
export const id="dl_e4d79cf716a74462937c";
export const url=new URL("../icons/floppy-disk-light.svg?v=ad67fb9acebfb98e6f5c9807b6ffa60ae49d1d0d7a1825f036423352cfcc96cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
