export const name="sword_rose";
export const id="dl_66ea65388450c26fd4ee";
export const url=new URL("../icons/sword_rose.svg?v=bb94e58f033f861f8248f57bc704583ffed7d878ceb89fda9f08a3db9983c978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
