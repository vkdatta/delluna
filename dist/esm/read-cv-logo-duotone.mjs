export const name="read-cv-logo-duotone";
export const id="dl_edf6c0b351f54fc6b6c9";
export const url=new URL("../icons/read-cv-logo-duotone.svg?v=2a9d5a69371adb9f11eade594ec17c82bbbc0d2e79b906fd25adfbffdb784234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
