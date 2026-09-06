export const name="camera-rotate-thin";
export const id="dl_3df0ad6bf0284891af0e";
export const url=new URL("../icons/camera-rotate-thin.svg?v=edcb0bcfa27d0357c3461c6b503ad5ed4145e7c023c4a3e574d148c48381cd05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
