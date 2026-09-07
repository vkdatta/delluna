export const name="read-cv-logo-duotone";
export const id="dl_edf6c0b351f54fc6b6c9";
export const url=new URL("../icons/read-cv-logo-duotone.svg?v=7024c71377cf1b0acd2301ecb3963e56b72d392645a4e36d9abc4379640a4075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
