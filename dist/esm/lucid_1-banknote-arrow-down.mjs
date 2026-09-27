export const name="lucid_1-banknote-arrow-down";
export const id="dl_fa7f233783934a48863e";
export const url=new URL("../icons/lucid_1-banknote-arrow-down.svg?v=546a49be1f9a06fc4d28090cd02201c7624a202d1a9162d0a2b3274f9896e372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
