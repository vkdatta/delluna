export const name="squares-exclude";
export const id="dl_4d8aa840f7d449d78961";
export const url=new URL("../icons/squares-exclude.svg?v=6e1804a33f73737b47b58ac6a11e3b8babbe312126b0b5bf09924c8f9573f2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
