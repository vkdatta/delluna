export const name="student-fill";
export const id="dl_15928b115714490aa304";
export const url=new URL("../icons/S/student-fill.svg?v=ab5810da0a7b50715fd21f10e65b94de387c8f9fdc4bf9afd1baad171b34f87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
