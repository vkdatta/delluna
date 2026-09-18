export const name="lan";
export const id="dl_d357712a9a9c46dca7f8";
export const url=new URL("../icons/L/lan.svg?v=af354b2b5b3d552862cfabe551d3a0ed1d78e24ecd727c9be418e091b66d0f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
