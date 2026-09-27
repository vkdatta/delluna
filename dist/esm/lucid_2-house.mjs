export const name="lucid_2-house";
export const id="dl_70db9e6c62604a458953";
export const url=new URL("../icons/lucid_2-house.svg?v=075370ad7791c83bf0c3be8e555fcc1fe940a231e7b60c464f185ecd5f137ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
