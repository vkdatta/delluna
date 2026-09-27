export const name="visibility";
export const id="dl_271f06c90a080334d298";
export const url=new URL("../icons/visibility.svg?v=f31da553b1ef369b35bc402fbc89bc77437e0423a3d72b902c5f02cf43a58375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
