export const name="folder-simple-star-duotone";
export const id="dl_04ef5e991e144a998659";
export const url=new URL("../icons/folder-simple-star-duotone.svg?v=adc90703dcbe6b370e018025e63405f10422e203b35953a020f0ce7ff98b6108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
