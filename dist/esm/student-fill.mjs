export const name="student-fill";
export const id="dl_db8ba9083cce084154d1";
export const url=new URL("../icons/student-fill.svg?v=ab5810da0a7b50715fd21f10e65b94de387c8f9fdc4bf9afd1baad171b34f87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
