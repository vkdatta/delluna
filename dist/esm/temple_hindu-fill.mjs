export const name="temple_hindu-fill";
export const id="dl_fda3aa13a1b2aa92ba2d";
export const url=new URL("../icons/temple_hindu-fill.svg?v=995b55bfc05fd9e7cb196ac808a551b0e081c4859a4a5ca5dfbc1e851c58872a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
