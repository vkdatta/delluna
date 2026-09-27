export const name="file-arrow-down-bold";
export const id="dl_b4858aa89c834ce99e3a";
export const url=new URL("../icons/file-arrow-down-bold.svg?v=90654bfb505fe7a13a28b49d966e60b12e60adf4b4206fc9a56b41eeac2c8de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
