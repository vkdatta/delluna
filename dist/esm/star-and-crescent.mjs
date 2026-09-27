export const name="star-and-crescent";
export const id="dl_34bc46301bc270b044f1";
export const url=new URL("../icons/star-and-crescent.svg?v=5fea9bd668b340f2ccc911a23c44e9b8300903cae1b9f98531f0e86a59874005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
