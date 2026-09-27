export const name="lucid_1-book-a";
export const id="dl_b8afb50b43534e00af47";
export const url=new URL("../icons/lucid_1-book-a.svg?v=a202449e06cc4ad0593613fe1727f8e59f673447bb5e69c820b06e3e90df83e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
