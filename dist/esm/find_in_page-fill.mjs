export const name="find_in_page-fill";
export const id="dl_31ffc21959d446939911";
export const url=new URL("../icons/find_in_page-fill.svg?v=a3341d2062adb5807a42de8bd82e9b9e97f8595487602036694ad2c06aeb4c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
