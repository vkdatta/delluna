export const name="student-duotone";
export const id="dl_a795be78ce4f4b94a811";
export const url=new URL("../icons/S/student-duotone.svg?v=2cf64e27313bf44cc1d1cd0e2e769899aa34e2409b449bf431d8ae4e67b01029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
