export const name="pages-fill";
export const id="dl_4690a586e58fd62d1333";
export const url=new URL("../icons/pages-fill.svg?v=8986f0e6b57096bfc4c397d70686702f4af97604f64bd91c676798d957b44f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
