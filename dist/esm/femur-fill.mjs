export const name="femur-fill";
export const id="dl_6ab7ddea78701c907cb2";
export const url=new URL("../icons/femur-fill.svg?v=5ca63fbe5a233b96e990ab74060a53075cefe3097de173c6bb075e5b6396d2fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
