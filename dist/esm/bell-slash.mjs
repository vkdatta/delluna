export const name="bell-slash";
export const id="dl_2b0b6f0e0557426e8d25";
export const url=new URL("../icons/bell-slash.svg?v=78a266d279e93261db55ffd3d12e88846365d717cc4f0e3b5670770fbad8807b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
