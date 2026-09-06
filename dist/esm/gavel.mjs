export const name="gavel";
export const id="dl_1ac98480aaad4874a2dc";
export const url=new URL("../icons/gavel.svg?v=71c56cbf809f14a0609f0d9369b2d43ad353f276c65a12fe3f8862e83f47ce48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
