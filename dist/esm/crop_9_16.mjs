export const name="crop_9_16";
export const id="dl_20bd75d2da639d998783";
export const url=new URL("../icons/crop_9_16.svg?v=47a1567ba6fb015f1281c484d99d255a8fa573581e66b02970fd4a8a645d2451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
