export const name="wine-bold";
export const id="dl_58983ef852132e2a2cb5";
export const url=new URL("../icons/wine-bold.svg?v=8849637c6547a977ce41d1e29d1693ed9f3a24880c5196a32c198f497db99c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
