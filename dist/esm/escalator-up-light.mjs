export const name="escalator-up-light";
export const id="dl_36d96eccf334441f91e1";
export const url=new URL("../icons/escalator-up-light.svg?v=eeecbba3256955e34aa32fc043c19951ac176208eb59ae60435480718b61ea2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
