export const name="sneaker-light";
export const id="dl_b33e05ec7f9da96299f1";
export const url=new URL("../icons/sneaker-light.svg?v=4de388c43f592f03fcc24b5de629c2040b7adb1a1f0e5dc1aac620534bb489d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
