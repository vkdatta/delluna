export const name="tag-chevron-bold";
export const id="dl_e2cb13e8c14142868636";
export const url=new URL("../icons/T/tag-chevron-bold.svg?v=b1f55a1280fe09e1e21e130de35ead934c5831129f6731672e181e1e8f7278b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
