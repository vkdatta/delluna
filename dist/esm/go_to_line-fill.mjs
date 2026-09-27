export const name="go_to_line-fill";
export const id="dl_586232bd35964783c8dc";
export const url=new URL("../icons/go_to_line-fill.svg?v=2b5b2fbb03d59488c5be9d28676e6f74e0263b85d61bef45077edd86b1eb946a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
