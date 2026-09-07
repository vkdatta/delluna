export const name="subset-of-light";
export const id="dl_15b8133fa71f443888ad";
export const url=new URL("../icons/S/subset-of-light.svg?v=f4c1b034e6af1e7ceba46e8ebcb9ec5d87694bf52fa17ad5b5805f03e7efdcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
