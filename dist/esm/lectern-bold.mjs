export const name="lectern-bold";
export const id="dl_ed07a97a83324b72b258";
export const url=new URL("../icons/lectern-bold.svg?v=e35d1c891392a471df8bfc3bb08c7df8a3d87a64832e6085609ac3a10822501d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
