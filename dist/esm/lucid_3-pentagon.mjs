export const name="lucid_3-pentagon";
export const id="dl_904616fe50cd4e3c8da2";
export const url=new URL("../icons/lucid_3-pentagon.svg?v=88c27fb2fa95addc3fb0059961e645d87b2f0027d7bf42d29a65a50411579f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
