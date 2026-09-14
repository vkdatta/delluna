export const name="album";
export const id="dl_d8ce883974f349479bd4";
export const url=new URL("../icons/A/album.svg?v=1b9cc7552559550ddd7a5e5382b627568cc0c8982343ed6dcd69773075610567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
