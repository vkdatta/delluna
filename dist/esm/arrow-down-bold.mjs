export const name="arrow-down-bold";
export const id="dl_03f962b11ba9412f9392";
export const url=new URL("../icons/arrow-down-bold.svg?v=de9eefb9007d3b3554aa2314f0f717dde4f867418bfe95e6e66121acda27b22f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
