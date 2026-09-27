export const name="disc-thin";
export const id="dl_b082488d458f4f0f993b";
export const url=new URL("../icons/disc-thin.svg?v=f5426f297376e2eddeb1dc7a04d61f16b31d6d31762c3262f29123ce296d44e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
