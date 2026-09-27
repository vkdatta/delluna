export const name="wifi-x-duotone";
export const id="dl_d0d22ee76d68829fec12";
export const url=new URL("../icons/wifi-x-duotone.svg?v=1494bb42c3d644c3daadbb73d79953e5db4743b0b549e4eddfe23f3d7b27e77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
