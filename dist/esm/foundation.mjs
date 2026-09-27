export const name="foundation";
export const id="dl_48233308114829964c8a";
export const url=new URL("../icons/foundation.svg?v=3754c601dce0d14f382f950dd5f40102b02510444a6af1a5af3d30728757c05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
