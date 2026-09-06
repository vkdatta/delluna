export const name="google-drive-logo-light";
export const id="dl_c6fa22e4f1f949f78db6";
export const url=new URL("../icons/google-drive-logo-light.svg?v=09c8c377e0a628db70b9f7b4380c3f823d101755d58ffc3d6cd0752aad59b479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
