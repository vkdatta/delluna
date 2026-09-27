export const name="angle-duotone";
export const id="dl_d8b243d2b63c4943886e";
export const url=new URL("../icons/angle-duotone.svg?v=91c4dad362fefcc4ddcba9b8910b363c24edae700ef40eaac7f9943482e941c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
