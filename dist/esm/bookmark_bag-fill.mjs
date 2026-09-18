export const name="bookmark_bag-fill";
export const id="dl_84a94c0e72be4e989e55";
export const url=new URL("../icons/bookmark_bag-fill.svg?v=c3b91e36ac7913489f9eeaf3f6ebea77d1f03b4108705b364b2e6fb22846f889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
