export const name="tv-fill";
export const id="dl_a37cb034e12656f91f5d";
export const url=new URL("../icons/tv-fill.svg?v=be9bce3c79606f29fee26a7124551e24979e142d12363682308770ae357da44c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
