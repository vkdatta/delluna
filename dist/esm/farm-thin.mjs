export const name="farm-thin";
export const id="dl_20167713f54f490d8cc9";
export const url=new URL("../icons/farm-thin.svg?v=83f2ad90817795f80fbcb67ad73ead62f4e5c130931669b6a6ba57bc0aaeecab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
