export const name="scooter";
export const id="dl_658767f66dd856979e7e";
export const url=new URL("../icons/scooter.svg?v=7e8bdcad850939453cf5c8c3f597cc499d9c8cb08e40aa66e9571d0243e59cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
