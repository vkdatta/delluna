export const name="arrow-circle-up-bold";
export const id="dl_92fe60d1d1ea4fc1a380";
export const url=new URL("../icons/arrow-circle-up-bold.svg?v=fdc08d9a9a17f242f9077d55e237c31cb91c154911db3eb9a77afbe8b17dcda9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
