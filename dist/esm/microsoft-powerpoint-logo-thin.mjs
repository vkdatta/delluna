export const name="microsoft-powerpoint-logo-thin";
export const id="dl_88ef308686aa44d3bad8";
export const url=new URL("../icons/microsoft-powerpoint-logo-thin.svg?v=ccc0d6fdd046d20e3d2aaf882ac4fd5a26ef68985d12980b9b41044adfcc654b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
