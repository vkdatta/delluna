export const name="contact_support";
export const id="dl_c791f608391458f4a9fc";
export const url=new URL("../icons/contact_support.svg?v=2052025d9b62581cf36ab52c2d235a4f4658feba696d6a1a16b4e57f3a761fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
