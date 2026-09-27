export const name="person_add-fill";
export const id="dl_19bb2c24a981faa91f13";
export const url=new URL("../icons/person_add-fill.svg?v=82715d5bf02f11e0abec6bacaddc7b0cddcb67f166644d71b0b1d1ccdd930d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
