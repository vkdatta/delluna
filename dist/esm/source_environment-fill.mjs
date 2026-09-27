export const name="source_environment-fill";
export const id="dl_aac3c6fafcec2b6e5cf8";
export const url=new URL("../icons/source_environment-fill.svg?v=dd41aaee3a49546785578c64886cc60f7a05b6d6812390e23f9e659941191d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
