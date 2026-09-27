export const name="warning-octagon-light";
export const id="dl_cae02f4e46b36174ac85";
export const url=new URL("../icons/warning-octagon-light.svg?v=975d0aa89d0dc1352c99b8d2857142d1104c535e89d402c4a484a0015056ff9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
