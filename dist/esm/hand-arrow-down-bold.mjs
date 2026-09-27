export const name="hand-arrow-down-bold";
export const id="dl_6af6cf15bd3a498a9476";
export const url=new URL("../icons/hand-arrow-down-bold.svg?v=b5eca43575d700b1482a08f0a790fb78b103da4e5e3d158abb0d05cf6cde7b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
