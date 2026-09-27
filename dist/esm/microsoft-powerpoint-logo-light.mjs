export const name="microsoft-powerpoint-logo-light";
export const id="dl_f9c0755de7c34565a609";
export const url=new URL("../icons/microsoft-powerpoint-logo-light.svg?v=c5affe87b9a23af8c2916ec48760201a69ddcf3d9f7e9502b901063843aa8347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
