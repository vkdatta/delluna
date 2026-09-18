export const name="pending";
export const id="dl_a0606de70daa44a5a416";
export const url=new URL("../icons/pending.svg?v=eeec240fb89f8317bb67df16a3af6d69bf895d87428829e6cbdb36a11e8176f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
