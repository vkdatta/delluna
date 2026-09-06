export const name="figma-logo-duotone";
export const id="dl_4c645335fa6e4e909e1d";
export const url=new URL("../icons/figma-logo-duotone.svg?v=d7b00880f86af51e0879a8803f8435605ef09d9b87f15501dbf07c88a3fb755a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
