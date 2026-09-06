export const name="phone-x-light";
export const id="dl_d3a6a269879240108c19";
export const url=new URL("../icons/phone-x-light.svg?v=2b522fd47d4c71950a049332a6555942bddd1d1a3ed88807aabbaca5373b65e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
