export const name="hand-pointing-bold";
export const id="dl_d156df854c6f409ab18c";
export const url=new URL("../icons/hand-pointing-bold.svg?v=5c898eb221c8ecc5715a29d3a19a32a1d203de055f047c1f31b50ffaba352991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
