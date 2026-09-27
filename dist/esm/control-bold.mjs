export const name="control-bold";
export const id="dl_5af74bd3c6394a30b3c5";
export const url=new URL("../icons/control-bold.svg?v=623259b6f32d7afeb1deab184e9b5438df6f55c8a94fef8318fc5f6a2b51da62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
