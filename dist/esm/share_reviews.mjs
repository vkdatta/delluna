export const name="share_reviews";
export const id="dl_e34bb93035b74ac1acd3";
export const url=new URL("../icons/share_reviews.svg?v=94a906c2d9886541c0df97b83297a945ba5cbcd5b95b7c823c27751d25b2e377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
