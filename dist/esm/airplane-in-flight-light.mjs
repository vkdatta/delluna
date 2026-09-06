export const name="airplane-in-flight-light";
export const id="dl_7243710ae9764c53b90d";
export const url=new URL("../icons/airplane-in-flight-light.svg?v=7d74a3cacc099b7e320cc52195f491affc1021a24c39526d178b3d4d05320a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
