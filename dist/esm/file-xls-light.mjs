export const name="file-xls-light";
export const id="dl_a25283cf4c994076b525";
export const url=new URL("../icons/file-xls-light.svg?v=eb3dd3f23e69d522e66abb571158606b818945977ab011c168e4609e97410496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
