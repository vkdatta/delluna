export const name="help_center";
export const id="dl_cf41951ec4207652ac83";
export const url=new URL("../icons/help_center.svg?v=ea01be8573a13de1db3d5368da1df563f6c946e538fdee7c27d0665e3a1034b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
