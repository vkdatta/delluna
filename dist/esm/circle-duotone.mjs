export const name="circle-duotone";
export const id="dl_16d60ac860324b5bad3d";
export const url=new URL("../icons/circle-duotone.svg?v=21dad808022fc9b140cb45c724fc0e0792027df816ed5020cb86f16fffb796bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
