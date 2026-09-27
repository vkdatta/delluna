export const name="battery-full-light";
export const id="dl_1fa4ab1a91f0429586ed";
export const url=new URL("../icons/battery-full-light.svg?v=9cda0d90c358805e50a23493c5d9b4efd22df9861e73817b679c6dd861e10808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
