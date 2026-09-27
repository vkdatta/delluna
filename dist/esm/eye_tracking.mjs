export const name="eye_tracking";
export const id="dl_e66d8ff6cfc0bdfde54a";
export const url=new URL("../icons/eye_tracking.svg?v=20e3d77e743b9eb8afe4d209c9cdd0188c18e2a10e6ef93107c39cb95e213a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
