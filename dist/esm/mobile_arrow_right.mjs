export const name="mobile_arrow_right";
export const id="dl_f5364864c6f3e1254dc5";
export const url=new URL("../icons/mobile_arrow_right.svg?v=f3bee10a0c009dd4806b419b407beb994db73ba63b698a7a5c1ba06fa52a78c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
