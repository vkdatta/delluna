export const name="lucid_1-arrow-down-up";
export const id="dl_9f0e76fe266048768ad3";
export const url=new URL("../icons/lucid_1-arrow-down-up.svg?v=dbb1d507fd4be18f4dcf35c85190ccd026d47c8e9939670814e69e6d458e6b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
