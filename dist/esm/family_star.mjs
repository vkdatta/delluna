export const name="family_star";
export const id="dl_7a006c9f1aed4e78bea5";
export const url=new URL("../icons/F/family_star.svg?v=66336cd39a38e8121a956d42e479ff2c9a0a857a8944bf4324d531b4b914154c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
