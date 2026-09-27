export const name="goggles";
export const id="dl_565f4a2fc35948ceb918";
export const url=new URL("../icons/goggles.svg?v=0aa554dc19df6cf2968a24ce6b55fd9d37bdf5a0f2a980518ee691bec6306a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
