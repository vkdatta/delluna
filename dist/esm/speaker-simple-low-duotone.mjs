export const name="speaker-simple-low-duotone";
export const id="dl_fa39d30d6a8dcf043128";
export const url=new URL("../icons/speaker-simple-low-duotone.svg?v=97291559fbc8596747f951043bc096d2baadb3e186ed9339aa4a884eeff6de5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
