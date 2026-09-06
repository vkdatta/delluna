export const name="book-open-text-duotone";
export const id="dl_eacdaf257fef49cca909";
export const url=new URL("../icons/book-open-text-duotone.svg?v=523066f01683f1879bbc20219bfcfb1cb4452fb26c0e074a3f8da4e06a75b60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
