export const name="person_heart";
export const id="dl_aaae89d8516a9ac56889";
export const url=new URL("../icons/person_heart.svg?v=a69a74e574670437e85e3d4963d8cdfdfde4f4eb12194caea7d27e24753adb4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
