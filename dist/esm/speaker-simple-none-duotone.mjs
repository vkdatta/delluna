export const name="speaker-simple-none-duotone";
export const id="dl_8f1843ced1324b96a570";
export const url=new URL("../icons/S/speaker-simple-none-duotone.svg?v=f643e88565fb34a86d5904a780c7b5235903a161d612c524b897ac3f626985d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
