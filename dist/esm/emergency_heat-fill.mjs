export const name="emergency_heat-fill";
export const id="dl_fb688d454169f527c967";
export const url=new URL("../icons/emergency_heat-fill.svg?v=b3eadd4007178058243682437a83a4b7a614027e51e02c605934c5c07b6f9cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
