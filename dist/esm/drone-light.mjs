export const name="drone-light";
export const id="dl_ddf234f8ad8e49c1bf5f";
export const url=new URL("../icons/drone-light.svg?v=013f07aaa81e7d289818f528b2d41cc078e993236b0e6d6a9f6d2edc8c03da7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
