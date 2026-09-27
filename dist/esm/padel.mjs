export const name="padel";
export const id="dl_35a7ff71479f19bf99f5";
export const url=new URL("../icons/padel.svg?v=f06af07caa82864be4297b599e0af18391c5e791362ae29ca3ac1a6aa746d541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
