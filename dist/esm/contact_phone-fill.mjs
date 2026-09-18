export const name="contact_phone-fill";
export const id="dl_344298b484be474db030";
export const url=new URL("../icons/contact_phone-fill.svg?v=558569b6860d15e632ec4b2abaa861857d5ec73b538171c40dc16827e3ef3fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
