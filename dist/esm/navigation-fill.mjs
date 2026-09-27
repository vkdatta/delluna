export const name="navigation-fill";
export const id="dl_7f19f572efa5b0d9b2e8";
export const url=new URL("../icons/navigation-fill.svg?v=c5535c21916f44cde401446e0ccd21da9ccee33a872c87c2c6e0f100ac273ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
