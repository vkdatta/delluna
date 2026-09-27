export const name="motion_photos_auto";
export const id="dl_7b2baf2e1989e3784540";
export const url=new URL("../icons/motion_photos_auto.svg?v=5486ab7a98bf88e7798dd89eba730a908cf2fd20701bea0f2cae5c006d90e3aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
