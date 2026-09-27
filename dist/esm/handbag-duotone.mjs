export const name="handbag-duotone";
export const id="dl_fc5e98617c6b4ff3b41d";
export const url=new URL("../icons/handbag-duotone.svg?v=b9ebe968862ae552d3c5358886933aa32a3acbb4f7ff3deb1aab4e3fb692ac64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
