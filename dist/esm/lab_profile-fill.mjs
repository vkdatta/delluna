export const name="lab_profile-fill";
export const id="dl_289df03ef608bdcf2c87";
export const url=new URL("../icons/lab_profile-fill.svg?v=993a1f2cabd990ec1cc5192b13f0a1a1399f7f188a2fed16702ab5bae1c17fe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
