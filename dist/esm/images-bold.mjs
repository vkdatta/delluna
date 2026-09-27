export const name="images-bold";
export const id="dl_1efc187a0f114ab58870";
export const url=new URL("../icons/images-bold.svg?v=3c6b4ed54ac4ad9b52f14e5e916c69a6ed57529a7aeeb41a03d93ec9115f3166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
