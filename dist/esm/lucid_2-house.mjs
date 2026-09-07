export const name="lucid_2-house";
export const id="dl_70db9e6c62604a458953";
export const url=new URL("../icons/lucid_2-house.svg?v=62e099a1f96ef171264b09ddaec751dad4b447f9be8e49683cf600b9bc259e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
