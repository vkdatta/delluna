export const name="floor_lamp";
export const id="dl_08c13a7cd33414be3d07";
export const url=new URL("../icons/floor_lamp.svg?v=987b9039a41f234f6a72669450aa104592dec89acbb02eff86b4d6a0967dc97f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
