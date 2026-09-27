export const name="gynecology";
export const id="dl_749e01f2d8d7496ed825";
export const url=new URL("../icons/gynecology.svg?v=866910c41a4f5828b4f3d54377d6ed3444e26212a27490e59fa653303b718072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
