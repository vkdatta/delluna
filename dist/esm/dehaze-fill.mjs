export const name="dehaze-fill";
export const id="dl_ef174e7cd42a4243af83";
export const url=new URL("../icons/D/dehaze-fill.svg?v=c6b246170737fdad3968ee985f6c435bb41f1a4702a582c3101eb94e8ca91ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
