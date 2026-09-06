export const name="arrow-up";
export const id="dl_4149467a8fbf4e7c82c9";
export const url=new URL("../icons/arrow-up.svg?v=361aa9f9c52a759bf598faf6ed38ccd426f949f541d662c65b5b5d868fa76980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
