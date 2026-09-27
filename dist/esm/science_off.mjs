export const name="science_off";
export const id="dl_75557e84f0f5ab8462db";
export const url=new URL("../icons/science_off.svg?v=1e776afb46a7a661320506547360ad080dc3e51a9f9f36884710e3dd22d75274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
